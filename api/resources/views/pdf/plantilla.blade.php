{{-- TODO: este es el docuemento de plantilla utilizado --}}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        .titulo {
            text-align: center;
        }

        img {
            height: 110px;
            width: 240px;
            margin-left: 35%;
        }
    </style>
</head>

<body>
    <img src="http://pau-mapu.cl/wp-content/uploads/2020/04/uct-logo.png" alt="">
    <div class="titulo">
        <h3>VICERRECTORÍA ACADÉMICA</h3><br>
        <h3>DIRECCIÓN DE ADMISIÓN Y REGISTROS ACADÉMICOS</h3>
        <h3><b>CERTIFICADO ESTUDIANTE REGULAR</b></h3>
    </div>
    <p>La Vicerrectoría Académica a través de la Dirección de Admisión y Registros Académicos certifica que:</p>
    @foreach ($usuario as $user)
        <p><b>{{ $user->nombre }}</b></p>
        <p>R.U.T. = <b>{{ $user->rut }} <br>
                <p>es estudiante regular, para el <b>segundo semestre 2022</b>, en la carrera de pregrado:</p>
                <p><b>{{ $user->carrera }}</b></p>
    @endforeach
    <p>Se extiende el presente certificado, a petición del interesado/a para trámites de:</p>
    {{-- este campo se llena con el select --}}
    <p><b>PARA LOS FINES QUE ESTIME CONVENIENTES</b></p>
</body>

</html>
