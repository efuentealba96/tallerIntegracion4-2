Seccion para editar empleado

<form method="post" action="{{url('/empleados/' . $empleado->id)}}" enctype="multipart/form-data">
{{csrf_field()}}
{{method_field('PATCH')}}

<label for="nombre">{{'nombre'}}</label>
<input id="nombre" type="text" name="nombre" value="{{$empleado->Nombre}}">
<br/>

<label for="ApellidoPaterno">{{'Apellido Paterno'}}</label>
<input id="ApellidoPaterno" type="text" name="ApellidoPaterno" value="{{$empleado->ApellidoPaterno}}">
<br/>

<label for="ApellidoMaterno">{{'Apellido Materno'}}</label>
<input id="ApellidoMaterno" type="text" name="ApellidoMaterno" value="{{$empleado->ApellidoMaterno}}">
<br/>

<label for="correo">{{'correo'}}</label>
<input id="correo" type="text" name="correo" value="{{$empleado->Correo}}">
<br/>

<label for="foto">{{'foto'}}</label>
<br/>
<img src="{{asset('storage').'/'.$empleado->Foto}}" alt='' width='200'>
<br/>
<<input type="submit" value="editar">

<input id="foto" type="file" name="foto" value="">
<br/>
    
</form>