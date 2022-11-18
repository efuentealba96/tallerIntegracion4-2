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

        .table {
            width: 100%;
            border: 1px solid #000;

        }

        .th,
        td {
            width: 25%;
            text-align: left;
            vertical-align: top;
            border: 1px solid #000;
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
    <h2>CERTIFICADO ACADÉMICO</h2>
    <p>La Vicerrectoría Académica a través de la Dirección de Admisión y Registros Académicos certifica que:</p>
    @foreach ($usuario as $user)
        <p><b>{{ $user->nombre }}</b>, R.U.T. = <b>{{ $user->rut }}</b>,de la carrera de pregrado:
            <b>{{ $user->carrera }}</b>
        </p>
        <p>
        <p>es estudiante regular, para el <b>segundo semestre 2022</b>, en la carrera de pregrado:</p></br>
        <p><b>{{ $user->carrera }}</b></p>
        <p> Cursó las asignaturas que se indican a continuación, obteniendo las calificaciones señaladas, según consta
            en las Actas de Notas Finales.</p>
        <!-- Firmas DIRECTOR(A) DE ADMISIÓN Y REGISTROS ACADÉMICOS -->
        <div class="Firmas">
            <p>Agregar Firma WE
                </br>
                Insertar nombre </br>
                DIRECTOR(A) DE ADMISIÓN Y REGISTROS ACADÉMICOS
            </p>
        </div>
        <div>
            <!-- Escala de calificaciones(Tabla QUE NO me sale xD) -->
            <table class="table">
                <thead>
                    <tr>
                        <th>ESCALA DE CALIFICACIONES:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7,0 Sobresaliente; 6,0 Muy Bueno; 5,0 Bueno; 4,0 Suficiente; 3,0 Menos que suficiente; 2,0
                            Deficiente; 1,0 Malo.
                            Calificaciones especiales: AA Aprobado; RR Reprobado; REP.INA Reprobado por Inasistencia; CC
                            Convalidado;</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Agregar Fecha -->
        <p> <b>TEMUCO</b>, <?php echo date('d-m-Y'); ?></p>
        <p>Dirección de Admisión y Registros Académicos. Manuel Montt 56 dara@uct.cl Fono (45) 2205236 - Fax (45)
            2211034 /http://www.uct.cl/Casilla 15-D/Temuco. Chile</p>

        <p>Adicionalmente se indican los créditos de libre disposición que han sido reconocidos por el alumno.</p>
        <table class="table">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>ACTIVIDAD</th>
                    <th>LUGAR</th>
                    <th>PAÍS</th>
                    <th>DESDE</th>
                    <th>HASTA</th>
                    <th>CRÉDITOS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Agregar</td>
                    <td>Agregar</td>
                    <td>Agregar</td>
                    <td>Agregar</td>
                    <td>Agregar</td>
                    <td>Agregar</td>
                    <td>Agregar</td>
                </tr>
            </tbody>
        </table>
        <div class="Firmas">
            <p>Agregar Firma WE
                </br>
                Insertar nombre </br>
                DIRECTOR(A) DE ADMISIÓN Y REGISTROS ACADÉMICOS
            </p>
        </div>
        <p> <b>TEMUCO</b>, <?php echo date('d-m-Y'); ?></p>
        <p>Dirección de Admisión y Registros Académicos. Manuel Montt 56 dara@uct.cl Fono (45) 2205236 - Fax (45)
            2211034 /http://www.uct.cl/Casilla 15-D/Temuco. Chile</p>
        <div>
            <!-- Escala de calificaciones(Tabla QUE NO me sale xD) -->
            <table class="table">
                <thead>
                    <tr>
                        <th>ESCALA DE CALIFICACIONES:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7,0 Sobresaliente; 6,0 Muy Bueno; 5,0 Bueno; 4,0 Suficiente; 3,0 Menos que suficiente; 2,0
                            Deficiente; 1,0 Malo.
                            Calificaciones especiales: AA Aprobado; RR Reprobado; REP.INA Reprobado por Inasistencia; CC
                            Convalidado;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    @endforeach


</body>

</html>
