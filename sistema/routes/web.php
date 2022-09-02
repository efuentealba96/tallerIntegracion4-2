<?php

use App\Http\Controllers\EmpleadosController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('auth.login');
});
//Route::get('/empleados','\App\Http\Controllers\EmpleadosController@index');
//Route::get('/empleados/create', '\App\Http\Controllers\EmpleadosController@create');
//Con Route::Resourece creo todas las rutas necesarias para acceder al controlador
Route::resource('empleados','\App\Http\Controllers\EmpleadosController')->middleware('auth');

Auth::routes(['register'=>false,'reset'=>false]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
