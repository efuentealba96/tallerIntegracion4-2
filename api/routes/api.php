<?php
//TODO: configuracion de backend
//? dado que estamos usando laravel en backen modificamos el archivo api.php para
//? realizar las consultas a la base de datos. Es importante importar el controlador
//? para poder utilizar la funcionalidaes que programamos en el.
//* los controladores se crean utilizando 'php artisan make:controler nombre_controlador'
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocsController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//? en estas secciones creamos la ruta y la funcion que va a tener en base a un controlador
Route::get('/document',[DocsController::class,'imprimir']);
Route::get('/user',[UserController::class, 'viewUser']);
