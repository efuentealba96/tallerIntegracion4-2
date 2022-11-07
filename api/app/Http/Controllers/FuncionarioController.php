<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class FuncionarioController extends Controller
{   

    
    public function viewFuncionario(){
        $query = DB::table('dbo.FUNCIONARIOS')
        ->join('carreras','FUNCIONARIOS.idCarrera','=','carreras.codigo_carrera')
        ->join('facultades','carreras.idfacultad','=','facultades.idFacultad')
        ->select(DB::raw('rut,nombre,cargo,IDcarrera'))
        ->where('funcionarios.IDcarrera',1235)
        ->get();
        return $query;
    }
}
