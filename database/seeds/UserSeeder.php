<?php

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_number')->insert([
            ['letter' => 'A', 'number' => 0],
        ]);
        factory(User::class, 1)->create(['role_id' => 1, 'email' => 'admin@admin.com', 'password' => Hash::make('admin'), 'number_account' => 'A0000']);

    }
}
