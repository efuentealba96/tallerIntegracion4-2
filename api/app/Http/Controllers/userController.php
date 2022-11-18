<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UserController extends Controller
{
    public function UserInfo(Request $request){
        $query = DB::table('dbo.usuarios')
        ->join('carreras','usuarios.idCarrera','=','carreras.codigo_carrera')
        ->join('facultades','carreras.idfacultad','=','facultades.idFacultad')
        ->join('funcionarios','funcionarios.IDcarrera','=','carreras.codigo_carrera')
        ->select(DB::raw('usuarios.rut,usuarios.nombre,usuarios.correo,carreras.carrera,usuarios.domicilio'))
        ->where('usuarios.rut',$request['rut'])
        ->get();
        return $query;

    }


}
