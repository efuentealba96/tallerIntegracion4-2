<?php
// TODO: creacion de pdf con plantilla html
namespace App\Http\Controlle1rs;

use Illuminate\Http\Request;
//! Es necesario que para la creacion del archivo pdf tengan instlada la libreria DOMPDF
//? en el siguiente enlace se encuentra el git hub de como hacer la instalacion https://github.com/barryvdh/laravel-dompdf
//? indica que hay que pegar en que archivo y en que seccion (pueden consulatar en caso de dudas)

use Barryvdh\DomPDF\Facade\Pdf;
class DocsController extends Controller
{
    public function imprimir(){
    //? en esta seccion se crea el pdf en base a una plantilla
    //? esta plantilla se encuentra en una capeta llamada pdf que esta en viwes
    $pdf = Pdf::loadView('pdf.plantilla');
    return $pdf->stream();
    }

}
