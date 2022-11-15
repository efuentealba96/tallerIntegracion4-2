<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class LoginController extends Controller
{
    public function Login(Request $request){
        $query = DB::table('dbo.usuarios')
        ->get();
        $resultados = array_column($query->toArray(),'rut');
        for($i = 0; $i <count($resultados); $i++){
            if($resultados[$i] == (int)$request['rut']){
                $newQuery = DB::table('dbo.usuarios')
                ->select(DB::raw('password'))
                ->where('rut',$request['rut'])
                ->get();
                $resultado = array_column($newQuery->toArray(),'password');

                if($resultado[0] == $request['password']){
                    return'Validación completa';
                }else{
                    return'La contraseña es incorrecta';
                }
            }else{
                return 'El rut del usuario no es valido';
            }
        }

    }
}
