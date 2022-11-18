<!-- {{-- TODO: este es el docuemento de plantilla utilizado --}} -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Estilos Para plantilla -->
    <style>
        .titulo {
            text-align: center;
        }

        .Firmas {
            text-align: center;
        }

        h2 {
            text-align: center;
        }

        body {
            font-weight: normal;
        }

        img {
            height: 100px;
            width: 280px;
            margin-left: 30%;
        }
    </style>
</head>

<body>
    <!-- Imagen del logo Uni -->
    <img src="https://nuevaconstitucion.uct.cl/wp-content/uploads/2021/05/UCT_logo-1920x641.png" alt="">
    <!-- Relleno despues del logo -->
    <div class="titulo">
        <p>UNIVERSIDAD CATÓLICA DE TEMUCO</p>
        <p>VICERRECTORÍA ACADÉMICA</p>
    </div>
    <h2><b>CERTIFICADO PERMANENCIA</b></h2>
    <p>La Vicerrectoría Académica a través de la Dirección de Admisión y Registros Académicos certifica que:</p>
    @foreach ($usuario as $user)
        <p>don(a) <b>{{ $user->nombre }}</b>, R.U.T. = <b>{{ $user->rut }}</b>, fue estudiante regular de la carrera
            de pregrado: <b>{{ $user->carrera }}</b></p>
        <p> Durante su permanencia el(la) estudiante no tuvo impedimentos académicos ni sanciones disciplinarias por
            contravenir el Reglamento del Alumno Regular de la Universidad.</p>
        <p>Se extiende el presente certificado, a petición del interesado(a) para: <br>
        <p><b>LOS FINES QUE ESTIME CONVENIENTES</b></p>
        </p>
        <!-- Firmas DIRECTOR(A) DE ADMISIÓN Y REGISTROS ACADÉMICOS -->
        <div class="Firmas">
            <p>Agregar Firma WE
                </br>
                Insertar nombre </br>
                DIRECTOR(A) DE ADMISIÓN Y REGISTROS ACADÉMICOS
            </p>
        </div>
        <!-- Aqui hay que estilizar la letra -->
        <p> Se hace presente que este establecimiento educacional, está reconocido por el Ministerio de Educación, según
            Decreto 479 de 10 de julio 1991, reducido a escritura
            pública de acuerdo al artículo 44 de la Ley 18.962, e inscrito en dicho Ministerio bajo el Número B-N°9,
            inscripción practicada el 10 de julio de 1991.</p>
        <!-- Agregar Fecha -->
        <p> <b>TEMUCO</b>, <?php echo date('d-m-Y'); ?></p>
        <p>Dirección de Admisión y Registros Académicos. Manuel Montt 56 dara@uct.cl Fono (45) 2205236 - Fax (45)
            2211034 /http://www.uct.cl/Casilla 15-D/Temuco. Chile</p>
    @endforeach
</body>

</html>
