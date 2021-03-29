<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

//get routes
Route::get('user/login/{email}/{password}', 'App\Http\Controllers\Api\UserController@userLogin');

Route::get('view/maintenance/{maintenance}', 'App\Http\Controllers\Api\MaintenanceController@viewMaintenances');

Route::get('view/cars/{user_id}', 'App\Http\Controllers\Api\CarController@viewCars');

//post routes
Route::post('register/user', 'App\Http\Controllers\Api\UserController@saveUser');

Route::post('save/maintenance', 'App\Http\Controllers\Api\MaintenanceController@saveMaintenance');

Route::post('add/car', 'App\Http\Controllers\Api\CarController@addCar');

//delete routes
Route::delete('delete/maintenance/{id}', 'App\Http\Controllers\Api\MaintenanceController@deleteMaintenance');

Route::delete('delete/car/{id}', 'App\Http\Controllers\Api\CarController@deleteCar');