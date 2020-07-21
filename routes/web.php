<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\GenericResourceCollection;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::post('api/authenticate', 'UserController@authenticate')->name('authenticate');

Route::group(['middleware' => 'auth:web', 'prefix' => 'api'], function () {

    Route::post('logout', 'UserController@logout')->name('logout');

    Route::get('user/', 'UserController@user')->name('user');

    Route::get('user/edit', 'UserController@edit')->name('user.edit');
    
    Route::post('user', 'UserController@save')->name('user.save');

    Route::get('user-profile', 'UserController@profile')->name('user.item');

    Route::get('users', 'UserController@list')->name('user.list');

    Route::delete('users/{id}', 'UserController@delete')->name('users.delete');

    Route::get('companies', 'CompanyController@list')->name('company.list');

    Route::post('company-dinamic-list', 'CompanyController@dinamicList')->name('company.dinamic_list');

    Route::get('company', 'CompanyController@show')->name('company.show');

    Route::post('company', 'CompanyController@save')->name('company.save');

    Route::delete('company/{id}', 'CompanyController@delete')->name('company.delete');

    Route::post('users-select', 'UserController@usersForSelect')->name('user.users_select');

    Route::get('recruitment', 'RecruitmentController@list')->name('recruitment.list');

    Route::post('recruitment', 'RecruitmentController@save')->name('recruitment.save');

    Route::delete('recruitment/{id}', 'RecruitmentController@delete')->name('recruitment.delete');

    Route::get('recruitment-item/{id?}', 'RecruitmentController@item')->name('recruitment.item');

    Route::get('categories', 'ProductController@listCategories')->name('category.list');

    Route::get('category', 'ProductController@category')->name('category.show');


    Route::prefix('generic')->group(function () {
        Route::post('list', 'GenericController@list')->name('generic.list');
    });

});

Route::get('application', 'RecruitmentController@application')->name('application');

Route::post('application', 'UserController@application')->name('application.post');


Route::get('/token/{token}', function ($token) {
    $data = DB::table('reset_password')->where('token', $token)->first();
    return view('index', ['data' => ['email' => $data->email ?? null]]);
});

Route::get('/{route?}/{route2?}/{route3?}', function () {
    return view('index', ['data' => Route::current()->parameters() ?? null]);
});
