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

        .Firmas {
            text-align: center;
        }

        img {
            height: 100px;
            width: 280px;
            margin-left: 30%;
        }
    </style>
</head>

<body>
    <img src="https://nuevaconstitucion.uct.cl/wp-content/uploads/2021/05/UCT_logo-1920x641.png" alt="">
    <div class="titulo">
        <h2>CONVENIO DE PRESTACIÓN DE SERVICIOS EDUCACIONALES</h2>
    </div>
    @foreach ($usuario as $user)
        <p> En Temuco, 02 de Noviembre de 2022, comparece por una parte la UNIVERSIDAD
            CATÓLICA DE TEMUCO, entidad educacional, RUT N° 71.918.700-5, representada para
            estos efectos por doña MARCELA EUGENIA MOMBERG ALARCÓN, cédula nacional de
            identidad N° 9.932.229-2 en su calidad de Prorrectora, ambas domiciliadas en Avenida
            Alemania N° 0211, comuna y ciudad de Temuco en adelante "La Universidad" y, por otra
            parte, don(ña) <b>{{ $user->nombre }}</b>, cédula de identidad N° <b>{{ $user->rut }}</b>,
            domiciliado (a) en <b>{{ $user->direccion }}</b>, en adelante "El (la)
            Estudiante" han acordado la celebración del siguiente Convenio de Prestación de
            Servicios Educacionales, según las siguientes disposiciones:</p>
        <h3>PRIMERO</h3>
        <p> Las partes declaran que don/doña <b>{{ $user->nombre }}</b>, ya
            individualizado(a), se ha matriculado como estudiante regular de carrera profesional de
            <b>{{ $user->carrera }}</b>
        <h3><b>Segundo</b></h3>
        <p> Para el cumplimiento del objetivo referido en la cláusula precedente, la Universidad
            Católica de Temuco se obliga a prestar los servicios educacionales correspondientes, de
            conformidad a los objetivos, planes y programas que la propia Universidad haya fijado o
            fije en lo sucesivo para la obtencion del título o grado académico en que se ha
            matriculado, de acuerdo con lo dispuesto en la cláusula primera del presente instrumento.</p>
        <br />
        <p> No obstante lo anterior, cuando alguna circunstancia excepcional de fuerza mayor lo
            justifique o la conveniencia académica así lo requiera con el objeto de dar continuidad a
            la prestación de los servicios educacionales, la Universidad estará facultada para
            modificar el calendario académico; adecuar el contenido de la actividad pertinente
            manteniendo sus objetivos académicos; establecer modalidades o número de
            evaluaciones distintas a las señaladas en el respectivo programa o informada por el
            académico o docente responsable u otra característica relevante; así como impartir o
            desarrollar clases, sesiones o actividades en modalidades distintas a la presencial u otro
            elemento que no altere las características relevantes del servicio; todo lo cual será
            oportunamente informado al estudiante, por las vías institucionales oficiales.</p>
        <h3>TERCERO</h3>
        <p> El (la) estudiante se obliga a cumplir con todas y cada una de las obligaciones que le
            impone el presente contrato y a respetar las normas generales de la Universidad y sus
            Reglamentos, particularmente el "Reglamento del Estudiante de Pregrado" o
            "Reglamento de Posgrado", según corresponda, o el que los reemplace, así como
            respetar y cumplir con cada uno de los deberes académicos que se le impongan y los
            objetivos, planes y programas de la carrera o programa señalado en la cláusula primera
            de este convenio. El (la) estudiante declara, que ante un eventual incumplimiento de la
            normativa de la Universidad o de las impuestas por el presente contrato, podrá ser
            sancionado de conformidad a las normas pertinentes.
        </p>
        <p> Del mismo modo, el (la) estudiante se compromete a retribuir económicamente los
            servicios educacionales prestados por la Universidad, en conformidad a las normas
            legales y universitarias vigentes y de acuerdo con lo pactado en el presente convenio.</p>
        <h3>CUARTO</h3>
        <p> El (la) estudiante pagará anualmente, el monto que por concepto de derechos básicos de
            matrícula y arancel la Universidad fije cada año, durante todo el transcurso de la carrera
            o programa señalado en la cláusula primera del presente convenio. Del mismo modo
            deberá pagar otros importes que por concepto de certificados, diplomas, procedimiento
            administrativo de titulación, derechos que la universidad determine y todo otro
            compromiso económico que esté pendiente de pago por cualquier causa o motivo. Los
            valores considerados en este párrafo se pagarán en las fechas y formas indicadas por la
            Universidad.</p>
        <p> El (la) estudiante, por medio del presente instrumento, declara conocer los montos
            señalados precedentemente, los cuales se entenderán integrados al presente contrato y
            declara aceptar y cumplir con la obligación de pagarlos, salvo que se encuentre
            beneficiado (a) con la gratuidad u otro beneficio establecido, de acuerdo a lo dispuesto en
            la cláusula séptima.</p>
        <p> Será condición esencial para que el (la) estudiante pueda inscribir asignaturas y cursar
            las actividades académicas o programas de estudios señalados en la cláusula primera
            del presente convenio, haber realizado el pago íntegro y oportuno de los montos
            señalados en la presente cláusula o suscribir el pagaré respectivo, de acuerdo con lo
            señalado en el párrafo siguiente.</p>
        <p> Las partes declaran en este acto que el monto por concepto de arancel anual señalado
            en el párrafo primero de la presente cláusula podrá ser documentado a través de un
            pagaré el cual se regirá por las normas que fije la Universidad para tales efectos y por las
            del presente convenio. Este pagaré podrá ser renovado anualmente a requerimiento de la
            Universidad y respecto de los montos anuales que en cada caso existan para la carrera
            en que se ha matriculado el (la) estudiante, lo cual será requisito indispensable para la
            matrícula en el respectivo período académico.</p>
        <p> Del mismo modo, si el (la) estudiante mantiene deudas insolutas de años anteriores sólo
            podrá matricularse y/o inscribir asignaturas o actividades académicas para el año
            correspondiente, previa regularización de dicha situación con la Universidad sea pagando
            el monto adeudado o mediante la suscripción de un pagaré que incluya el monto
            señalado en el párrafo anterior y la deuda insoluta. De no efectuar dicha regularización, el
            (la)
            estudiante estará impedido (a) de inscribir las asignaturas o realizar las actividades
            académicas correspondientes y se considerará como no matriculado para todos los
            efectos.</p>
        <h3>QUINTO</h3>
        <p> En caso de mora o simple retardo en los pagos señalados en el artículo cuarto del
            presente convenio, los montos se reajustarán en el mismo porcentaje de aumento que
            haya experimentado el índice de precios al consumidor. En este caso, la Universidad
            podrá efectuar la cobranza judicial y extrajudicial del pago total de la deuda, de acuerdo a
            la legislación vigente.</p>
        <h3>SEXTO</h3>
        <p> Será responsabilidad del estudiante realizar el proceso de postulación al sistema de
            beneficios estudiantiles de financiamiento interno y/o externo, en caso de que los hubiere.
            Para estos efectos deberá cumplir la normativa vigente en los plazos definidos,
            presentando todos los antecedentes fidedignos requeridos por las leyes y normas
            universitarias respectivas así como suscribir todos los documentos necesarios para
            determinar los montos y condiciones de estos beneficios y aquellos documentos
            destinados a garantizar su íntegra y oportuna restitución en caso de ser requeridos.</p>
        <p> La Universidad se reserva el derecho a ejercer las acciones legales que procedan en
            caso de falta de veracidad o autenticidad de los documentos proporcionados o si estos
            no cumplen con algún requisito que señala la ley para su validez.</p>
        <h3>SÉPTIMO</h3>
        <p> En el caso de los (las) estudiantes de pregrado que hayan sido beneficiados (as) con
            gratuidad de conformidad con la ley N° 21.091 sobre educación superior, quedarán
            exentos de la obligación señalada en la cláusula cuarta del presente instrumento, en lo
            referido al pago de arancel anual y matrícula de la carrera señalada en la cláusula
            primera, respecto de la cual se le haya otorgado dicho beneficio y mientras éste se
            encuentre vigente.</p>
        <p> En el caso que el (la) estudiante no cumpla con los requisitos para renovar el beneficio de
            gratuidad o lo haya perdido o extinguido por cualquier motivo y para el cumplimiento
            íntegro y oportuno de las obligaciones del pago de arancel referido en la cláusula cuarta
            del presente convenio, el (la) estudiante deberá suscribir un pagaré de conformidad a lo
            establecido en la cláusula cuarta del presente convenio. Lo anterior no será aplicable
            para el valor de la matrícula, el cual deberá ser pagado íntegramente en la forma y plazo
            de acuerdo a la normativa vigente y de conformidad a lo dispuesto en la cláusula cuarta
            del presente convenio.</p>
        <h3>OCTAVO</h3>
        <p> Para solicitar la suspensión o renuncia a los estudios de conformidad con la
            reglamentación interna de la Universidad, se deberá haber dado cumplimiento a todas las
            obligaciones emanadas del presente contrato, especialmente a las obligaciones
            económicas señaladas en la cláusula cuarta, a la fecha del retiro o renuncia. No
            procederá la devolución parcial o total del derecho básico de matrícula si se solicita
            suspensión o renuncia</p>
        <p> Con todo, el (la) estudiante que se reincorpore a la Universidad luego de una suspensión
            o renuncia, no deberá tener deudas insolutas en virtud del presente convenio.</p>
        <p> Lo anterior también será aplicable en caso de estudiantes eliminados por razones
            académicas y a cualquier otra situación en la cual el estudiante pierda su calidad de tal,
            de conformidad con los reglamentos respectivos.</p>
        <h3>NOVENO</h3>
        <p> Es de responsabilidad del (la) estudiante mantener actualizados sus datos personales de
            acuerdo a los procedimientos institucionales, durante la vigencia del presente convenio y
            mientras mantengan la condición de estudiante de esta universidad.</p>
        <p> Al momento de titulación o renuncia será requisito actualizar los datos personales</p>
        <p> La vía formal para comunicar e informar los datos señalados en la presente cláusula será
            el correo institucional o la plataforma dispuesta para tales efectos.</p>
        <h3>DÉCIMO</h3>
        <p> El presente convenio se mantendrá vigente mientras el (la) estudiante tenga la calidad de
            regular en los términos y condiciones que establece la reglamentación vigente de la
            Universidad.</p>
        <p> En caso de suspensión de estudios de conformidad con la normativa vigente de la
            Universidad, se suspenderán los derechos y obligaciones contenidas en el presente
            convenio mientras dure la suspensión, sin perjuicio de lo señalado en la cláusula séptima
            del presente convenio.</p>
        <h3>DÉCIMO PRIMERO</h3>
        <p> El presente convenio se firma en dos ejemplares de igual tenor y fecha, conservando uno
            de ellos el estudiante y otro la Universidad.</p>
        <h3>DÉCIMO SEGUNDO</h3>
        <p> Para todos los efectos legales derivados del presente contrato, las partes fijan su
            domicilio en la ciudad de Temuco y se someten a la jurisdicción de sus Tribunales de
            Justicia.</p>
        <div class="Firmas">
            <p>Agregar Firma WE
                </br>
                Insertar nombre </br>
                DIRECTOR(A) DE ADMISIÓN Y REGISTROS ACADÉMICOS
            </p>
        </div>
    @endforeach
</body>

</html>
