<?php
// TODO: creacion de pdf con plantilla html
namespace App\Http\Controllers;

use Illuminate\Http\Request;
//! Es necesario que para la creacion del archivo pdf tengan instlada la libreria DOMPDF
//? en el siguiente enlace se encuentra el git hub de como hacer la instalacion https://github.com/barryvdh/laravel-dompdf
//? indica que hay que pegar en que archivo y en que seccion (pueden consulatar en caso de dudas)

use Barryvdh\DomPDF\Facade\Pdf;
use DB;
class DocsController extends Controller
{
    public function CalumnoRegular(Request $request){
    $user = DB::table('dbo.usuarios')
    ->join('carreras','usuarios.idCarrera','=','carreras.codigo_carrera')
    ->join('facultades','carreras.idfacultad','=','facultades.idFacultad')
    ->select(DB::raw('usuarios.nombre,usuarios.rut,carreras.carrera'))
    ->where('usuarios.rut',$request['rut'])
    ->get();
    $pdf = Pdf::loadView('documents.AluRegu',['usuario'=>$user,'asuntos'=>$request['asunto']]);
    return $pdf->stream();
    }

    public function Cconducta(Request $request){
        $user = DB::table('dbo.usuarios')
        ->join('carreras','usuarios.idCarrera','=','carreras.codigo_carrera')
        ->select(DB::raw('usuarios.nombre,usuarios.rut,carreras.carrera'))
        ->where('usuarios.rut',$request['rut'])
        ->get();
        $pdf = Pdf::loadView('documents.CertConducta',['usuario'=>$user]);
        return $pdf->stream();
        }

    public function Cprestacion(Request $request){
        $user = DB::table('dbo.usuarios')
        ->join('carreras','usuarios.idCarrera','=','carreras.codigo_carrera')
        ->select(DB::raw('usuarios.nombre,usuarios.rut,carreras.carrera'))
        ->where('usuarios.rut',$request['rut'])
        ->get();
        $pdf = Pdf::loadView('documents.ConvenioPrestacion',['usuario'=>$user]);
        return $pdf->stream();
        }
}

