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
    public function imprimir(Request $request){
    //? en esta seccion se crea el pdf en base a una plantilla
    //? esta plantilla se encuentra en una capeta llamada pdf que esta en viwes
    $user = DB::table('dbo.usuarios')
    ->join('carreras','usuarios.idCarrera','=','carreras.codigo_carrera')
    ->join('facultades','carreras.idfacultad','=','facultades.idFacultad')
    ->select(DB::raw('usuarios.nombre,usuarios.rut,carreras.carrera'))
    ->where('usuarios.rut',$request['rut'])
    ->get();
    // $pdf = Pdf::loadView('pdf.plantilla',['usuario'=>$user]);
    $pdf = Pdf::loadView('pdf.plantilla',['usuario'=>$user,'asuntos'=>$request['asunto']]);
    return $pdf->stream();
}

}