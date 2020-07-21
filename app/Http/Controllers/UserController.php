<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\GenericResourceCollection;
use App\Http\Resources\UserEditResource;
use App\Http\Resources\UserListResource;
use App\Http\Resources\UserProfileResource;
use App\Http\Resources\UserResource;
use App\Mail\CreatePassword;
use App\Models\File;
use App\Models\Recruitment;
use App\Models\User;
use App\Trail\Payment;
use App\Trail\SearchText;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Validator;

class UserController extends Controller
{
    use Payment, SearchText;

    public function authenticate(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->keys() as $key) {
                $errors[$key] = $validator->errors()->first($key);
            }
            return Response::json('Please correct and try again.', $errors);
        }

        if ($request->get('newPassword')) {
            $user = User::where('email', $request->email)->first();
            $user->password = Hash::make($request->password);
            $user->active = 1;
            $user->email_verified_at = new Carbon;
            $user->save();
            DB::table('reset_password')->where('email', $request->email)->delete();
        }

        if (Auth::attempt($request->only('email', 'password'), $request->remember)) {

            return new UserResource(Auth::user());

        }
        return response(['error' => 'Invalid email/password, please try again'], 400);
    }

    public function logout()
    {
        Auth::logout();
        return response('logout', 200);
    }

    public function application(Request $request)
    {
        if ($request->get('user_number')) {

            if (!($user = User::where('number_account', $request->get('user_number'))->first())) {
                return \json_encode('Wrong reference');
            }

            if (Recruitment::where('email', $request->email)->first()) {
                return \json_encode('Ya se ha registrado un representante con ese email.');
            }

            $formatTime = function ($time1 = null, $time2 = null) {

                if (!$time1 && !$time2) {
                    return null;
                }

                $result = "";

                if ($time1) {
                    $time1 = \explode(':', $time1);
                    $result = Carbon::create(null, null, null, $time1[0], $time1[1])->format('h:i A');
                }

                if ($time2) {
                    $time2 = \explode(':', $time2);
                    return empty($result) ?
                    Carbon::create(null, null, null, $time2[0], $time2[1])->format('h:i A') :
                    $result . ' - ' . Carbon::create(null, null, null, $time2[0], $time2[1])->format('h:i A');
                }

                return $result;
            };

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
            $item->monday = $formatTime($request->get('monday1'), $request->get('monday2'));
            $item->tuesday = $formatTime($request->get('tuesday1'), $request->get('tuesday2'));
            $item->wednesday = $formatTime($request->get('wednesday1'), $request->get('wednesday2'));
            $item->thursday = $formatTime($request->get('thuersday1'), $request->get('thuersday2'));
            $item->friday = $formatTime($request->get('friday1'), $request->get('friday2'));
            $item->saturday = $formatTime($request->get('saturday1'), $request->get('saturday'));
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
            $user = User::select('name', 'number_account')->where('number_account', $number)->first();
            return view('application', ['user' => $user]);
        }
        return view('application', ['user' => ['testuser', 463535352]]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function user()
    {
        return new UserResource(Auth::user());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function profile(Request $request)
    {
        return new UserProfileResource(User::find($request->get('id')));
    }

    function list(Request $request) {

        $user = Auth::user();

        $query = User::query();

        if (($role = $request->get('role'))) {
            $query->where('role_id', User::getRole($role));
        }

        switch ($user->role) {
            case 'admin':{                    
                    break;
                }
            default:
                $query->where('parent_id', $user->id);
        }

        if ($search = $request->search) {
            $this->searchTerm($query, $search);
        }

        return UserListResource::collection($query->paginate($request->get('perPage')));
    }

    public function usersForSelect(Request $request)
    {
        $query = User::query();
        if ($role = $request->role) {
            $query->where('role_id', User::getRole($role));
        }

        return new GenericResourceCollection($query->get(), ['id', 'name', 'image', 'email', 'role']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        return new UserEditResource(User::find($request->get('id')));
    }

    public function save(Request $request)
    {
        $user = Auth::user();

        $input = $request->all();

        $input['number_account'] = User::generateNumberAccount();

        $parent = null;

        if ($user->role_id == User::getRole('admin')) {

            if (isset($input['role']) && !is_array($input['role'])) {
                $input['role_id'] = $input['role'];
            }
        } else {
            $input['parent_id'] = $user->id;
            $input['company_id'] = $user->company_id;
            $input['role_id'] = User::getRole('broker');
        }

        if (isset($input['id'])) {

            $item = User::find($input['id']);

            $item->update($input);

            $parent = $item->parent()->first();
        } else {

            if (User::where('email', $input['email'])->exists()) {
                return \json_encode(['error' => 'Ya existe un usuario con ese correo.']);
            }

            if (isset($input['card_number'])) {

                list($cardNUmber, $cardCVC, $year, $month) = \array_merge([$input['card_number'], $input['card_cvc']], \explode('-', $input['card_date']));

                if (!$this->makePayment()) {
                    return \json_encode(['error' => 'Error en el pago']);
                }
            }
            $item = User::create($input);

            $token = hash_hmac('sha256', Str::random(40), config('app.key'));

            DB::table('reset_password')->insert(['email' => $newUser->email, 'token' => $token]);

            try {
                Mail::to($item)->send(new CreatePassword($item, $token));
            } catch (\Exception $exception) {
            }
        }

        if ($user->role_id == User::getRole('admin')) {

            if (isset($input['parent']) && is_array($input['parent']) && count($input['parent'])) {

                if ($parent && $input['parent']['id'] != $parent->id) {
                    $parent = User::find($input['parent']['id']);
                    $item->parent()->associate($parent);
                    $item->save();
                } else if (!isset($parent->id) && $input['parent']['id']) {
                    $parent = User::find($input['parent']['id']);
                    $item->parent()->associate($parent);
                }
                $item->save();
            } else if ($parent) {
                $item->parent()->dissociate();
                $item->save();
            }

            if (isset($input['childrenRemoved']) && !empty($input['childrenRemoved'])) {
                foreach (User::find($input['childrenRemoved']) as $user) {
                    $user->parent()->dissociate();
                    $user->save();
                }
            }

            if (isset($input['children']) && !empty($input['children'])) {
                foreach (User::find($input['children']) as $user) {
                    $user->parent()->associate($item);
                    $user->save();
                }
            }

        }

        if (isset($input['image']) && \is_array($input['image']) && !isset($input['image']['id'])) {

            $file = new File();

            $file->save($input['image']);

            if ($image = $item->image()->first()) {
                $image->delete();
            }

            $item->image()->save($file);

        }

        return !isset($input['id']) ? "Se ha creado una cuenta y se ha enviado el correo electrónico al usuario para activarla." : new UserListResource($item);
    }

    public function delete($id)
    {
        $item = User::find($id);

        $item->delete();

        return 'deleted';
    }
}
