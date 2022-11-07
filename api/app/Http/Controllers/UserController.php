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
        ->select(DB::raw('usuarios.nombre,usuarios.rut,carreras.carrera,facultades.facultad'))
        ->where('usuarios.rut',201577306)

       // ->$rut(DB::raw('usuarios.rut'))
        /*while ($rut = DB::raw('usuarios.rut')) begin 
        ->select(DB::raw('usuarios.nombre,usuarios.rut,carreras.carrera,facultades.facultad'))
        end */
        ->get();
        return $query;
    }
}
