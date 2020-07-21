<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use App\Trail\Payment;
use App\Trail\SearchText;
use App\Models\Recruitment;
use Illuminate\Support\Str;
use App\Mail\CreatePassword;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\RecruitmentResource;
use App\Http\Resources\RecruitmentListResource;

class RecruitmentController extends Controller
{

    use Payment, SearchText;

    public function application(Request $request)
    {
        if ($request->get('user_number')) {

            if (!($user = User::where('number_account', $request->get('user_number'))->first())) {
                return \json_encode('Wrong reference');
            }

            $data = $request->all();

            $item = new Recruitment();
            $item->first_name = $data['first_name'];
            $item->last_name = $data['last_name'];
            $item->email = $data['email'];
            $item->phone = $data['phone'];
            $item->address = $data['address'];
            $item->zip_code = $data['postal_code'];
            $item->city = $data['city'];
            $item->citizenship = $data['citizenship'] ?? null;
            $item->profession = $data['profession'] ?? null;
            $item->likejob = $data['likejob'] ?? null;
            $item->dislikejob = $data['dislikejob'] ?? null;
            $item->desireincome = $data['desireincome'] ?? null;
            $item->attractivestatus = $data['attractivestatus'] ?? null;
            $item->bigachievement = $data['bigachievement'] ?? null;
            $item->knowfrom = $data['knowfrom'] ?? null;
            $item->interested_us = $data['interested_us'] ?? null;
            $item->licenses = $data['licenses'] ?? null;
            $item->monday = $request->get('monday1', '') . '-' . $request->get('monday2', ''); //$formatTime($request->get('monday1'), $request->get('monday2'));
            $item->tuesday = $request->get('tuesday1', '') . '-' . $request->get('tuesday2', ''); //$formatTime($request->get('tuesday1'), $request->get('tuesday2'));
            $item->wednesday = $request->get('wednesday1', '') . '-' . $request->get('wednesday2', ''); //$formatTime($request->get('wednesday1'), $request->get('wednesday2'));
            $item->thursday = $request->get('thursday', '') . '-' . $request->get('thursday2', ''); //$formatTime($request->get('thuersday1'), $request->get('thuersday2'));
            $item->friday = $request->get('friday1', '') . '-' . $request->get('friday2', ''); //$formatTime($request->get('friday1'), $request->get('friday2'));
            $item->saturday = $request->get('saturday1', '') . '-' . $request->get('saturday2', ''); //$formatTime($request->get('saturday1'), $request->get('saturday'));
            $item->referred_one_name = $data['referred_one_name'] ?? null;
            $item->referred_one_email = $data['referred_one_email'] ?? null;
            $item->referred_one_phone = $data['referred_one_phone'] ?? null;
            $item->referred_two_name = $data['referred_two_name'] ?? null;
            $item->referred_two_email = $data['referred_two_email'] ?? null;
            $item->referred_two_phone = $data['referred_two_phone'] ?? null;
            $item->referred_three_name = $data['referred_three_name'] ?? null;
            $item->referred_three_email = $data['referred_three_email'] ?? null;
            $item->referred_three_phone = $data['referred_three_phone'] ?? null;

            $item->referredBy()->associate($user);

            $item->save();

            return \json_encode('saved');
        }
        if ($number = $request->get('number')) {
            if ($user = User::select('name', 'number_account')->where('number_account', $number)->first()) {
                return view('application', ['user' => $user]);
            }

        }
        return view('index', ['data' => Route::current()->parameters()]);
        //view('application', ['user' => [$user->name + ' ' + $user->last_name, $number]]);
    }

    function list(Request $request) {

        $user = Auth::user();
        

        $query = Recruitment::query();

        switch ($user->role->slug) {
            case 'admin':{
                    break;
                }
            default:
                $query->where('referred_by', $user->id);
        }

        if($search = $request->search) $this->searchTerm($query, $search, ['first_name', 'last_name', 'email', 'phone']);

        return RecruitmentListResource::collection($query->paginate($request->get('perPage')));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function item(Request $request)
    {
        return new RecruitmentResource(Recruitment::find($request->get('id')));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function save(Request $request)
    {
        $input = $request->all();

        if (isset($input['payment'])) {
            return "A representative account has been created and the email has been sent to activate it";
            $this->validate($request, [
                'number' => 'numeric|required',
                'date' => 'string|required',
                'cvc' => 'numeric|required',
                'recruitment' => 'numeric|required',
            ]);

            list($year, $month) = \explode('-', $input['date']);

            list($cardNUmber, $cardCVC, $year, $month) = \array_merge([$input['number'], $input['cvc']], \explode('-', $input['date']));    

            $recruitment = Recruitment::find($input['recruitment']);

            if (User::where('email', $recruitment->email)->exists()) {
                return \json_encode(['error' => 'Ya existe un usuario con ese correo.']);
            }

            if (!$this->makePayment()) {
                return \json_encode(['error' => 'Error en el pago']);
            }

            $user = $recruitment->referredBy()->first() ?? Auth::user();

            $company = $user->company()->first();

            $newUser = User::create([
                'address' => $recruitment->address ?: null,
                'email' => $recruitment->email,
                'name' => $recruitment->first_name,
                'last_name' => $recruitment->last_name ?: null,
                'phone' => $recruitment->phone ?: null,
                'role_id' => Role::where('slug', 'broker')->first()->id,
                'commission_rate' => 50,
                'active' => 0,
                'company_id' => $company->id ?? null,
                'parent_id' => $user->id ?? null,
                'number_account' => User::generateNumberAccount(),
            ]);

            $token = hash_hmac('sha256', Str::random(40), config('app.key'));

            DB::table('reset_password')->insert(['email' => $newUser->email, 'token' => $token]);

            Mail::to($newUser)->send(new CreatePassword($newUser, $token));

            $recruitment->oxygen = true;
            $recruitment->save();

            return "Se ha creado una cuenta y se ha enviado el correo electrónico al usuario para activarla.";
        }

        $item = Recruitment::find($request->get('id'));

        foreach (['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as $value) {

            $input[$value] = ($input[$value . '1'] || $input[$value . '2']) ?
            $input[$value . '1'] . '-' . $input[$value . '2'] :
            null;
        }

        $item->update($input);

        return new RecruitmentListResource($item);
    }    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $item = Recruitment::find($id);

        $item->delete();

        return 'deleted';
    }
}
