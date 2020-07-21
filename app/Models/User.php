<?php

namespace App\Models;

use App\Models\Role;
use App\Models\Company;
use Illuminate\Support\Facades\DB;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['parent_id', 'company_id', 'role_id', 'id', 'founder', 'password', 'address', 'birthday', 'commission_rate', 'email', 'name', 'last_name', 'phone', 'number_account', 'title', 'licensed', 'active'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getFullNameAttribute(){
        return $this->name . ' ' . $this->last_name;
    }

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function parent()
    {
        return $this->belongsTo(User::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(User::class, 'parent_id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function scopeOwner($query)
    {
        return $query->where('role_id', self::getRole('agency'))->first();
    }

    public function scopeElite($query)
    {
        return $query->where('role_id', 3);

    }

    public function scopeBroker($query)
    {
        return $query->where('role_id', 4);
    }

    public static function getRole($param)
    {

        $roles = [
            'admin' => 1,
            'agency' => 2,
            'elite' => 3,
            'broker' => 4,
            'staff' => 5,
            'client' => 6,
        ];
        return is_numeric($param) ? array_search($param, $roles) : $roles[$param];
    }

    public static function generateNumberAccount()
    {
        $userNumber = DB::table('user_number')->first();
                if ($userNumber->number < 9999) {
                    DB::table('user_number')->where('id', $userNumber->id)->update(['number' => $userNumber->number + 1]);
                    switch (\strlen($userNumber->number++)) {
                        case 1:return "{$userNumber->letter}000{$userNumber->number}";
                        case 2:return "{$userNumber->letter}00{$userNumber->number}";
                        case 3:return "{$userNumber->letter}0{$userNumber->number}";
                    }
                } else {
                    $letters = range('A', 'Z');
                    for ($i = 0; $i < count($letters); $i++) {
                        if ($letters[$i] == $userNumber->letter) {
                            $userNumber->letter = $letters[$i + 1];
                            DB::table('user_number')->where('id', $userNumber->id)->update(['letter' => $letters[$i + 1], 'number' => 1]);
                            return $letters[$i + 1] . "0001";
                        }
                    }
                }
    }

    public function image()
    {
        return $this->morphOne('App\Models\File', 'fileable');
    }

    public function delete()
    {
        if ($img = $this->image) {
            $img->delete();
        }
        return parent::delete();
    }

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('order', function (Builder $builder) {
            $builder->orderBy('created_at', 'desc');
        });
    }
}
