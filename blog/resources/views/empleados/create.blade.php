Seccion para crear empleados
<form method="post" action="{{ url('/empleados')}}" enctype="multipart/form-data">
{{ csrf_field() }}

<label for="nombre">{{'nombre'}}</label>
<input id="nombre" type="text" name="nombre" value="">
<br/>

<label for="ApellidoPaterno">{{'Apellido Paterno'}}</label>
<br/>

<label for="ApellidoMaterno">{{'Apellido Materno'}}</label>
<input id="ApellidoMaterno" type="text" name="ApellidoMaterno" value="">
<br/>

<label for="correo">{{'correo'}}</label>
<input id="correo" type="text" name="correo" value="">
<br/>

<label for="foto">{{'foto'}}</label>
<input id="foto" type="file" name="foto" value="">
<br/>

<input type="submit" value="agregar">

</form>