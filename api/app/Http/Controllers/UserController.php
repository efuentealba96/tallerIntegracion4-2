<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UserController extends Controller
{
    public function viewUser(Request $request){
        $query = DB::table('dbo.usuarios')
        ->join('carreras','usuarios.idCarrera','=','carreras.codigo_carrera')
        ->join('facultades','carreras.idfacultad','=','facultades.idFacultad')
        ->join('funcionarios','funcionarios.IDcarrera','=','carreras.codigo_carrera')
        ->select(DB::raw('usuarios.rut,usuarios.nombre,usuarios.correo,carreras.carrera'))
        ->where('usuarios.rut',$request['rut'])
        ->get();
        return $query;

        // $query = DB::table('dbo.profesores_cursos')
        // ->join('cursos','profesores_cursos.sigla','=','cursos.sigla')
        // ->join('profesores','profesores_cursos.rut','=','profesores.rut')
        // ->select(DB::raw('cursos.nombre,profesores.nombre'))
        // ->where('cursos.sigla','DIET2425')
        // ->get();

        // return $query;
    }
}
