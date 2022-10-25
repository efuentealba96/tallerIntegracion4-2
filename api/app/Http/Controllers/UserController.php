<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UserController extends Controller
{
    public function viewUser(){
        $query = DB::table('dbo.usuarios')
        ->join('carreras','usuarios.idCarrera','=','carreras.codigo_carrera')
        ->join('facultades','carreras.idfacultad','=','facultades.idFacultad')
        ->select(DB::raw('usuarios.nombre,carreras.carrera,facultades.facultad'))
        ->get();
        return $query;
    }
}
