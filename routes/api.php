<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth',
], function () {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::put('refresh', 'AuthController@refresh');
    Route::get('current', 'AuthController@current');

});

Route::group([
    'middleware' => 'auth:api',
], function () {

    Route::resource('notes', 'NotesController', ['except' => ['create', 'edit']]);

});

