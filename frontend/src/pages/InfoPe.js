const InfoPe = () => {
  return (
    <div className="datos">
      <br></br>
      
      <br></br>
      <table className="tabla">
        <h3 className="dos">Datos Personales</h3>
        <tr>
          <td className="elemento"><b>Rut:</b></td>
          <td className="elemento1">%rut%</td>
        </tr>
        <tr>
          <td className="elemento"><b>Apellido Paterno:</b></td>
          <td className="elemento1">%paterno%</td>
        </tr>
        <tr>
          <td className="elemento"><b>Apellido Materno:</b></td>
          <td className="elemento1">%materno%</td>
        </tr>
        <tr>
          <td className="elemento"><b>Nombres:</b></td>
          <td className="elemento1">%names%</td>
        </tr>
        <tr>
          <td className="elemento"><b>Fecha de Nac.:</b></td>
          <td className="elemento1">%date%</td>
        </tr>
        <tr>
          <td className="elemento"><b>Sexo:</b></td>
          <td className="elemento1">%sex%</td>
        </tr>
        <tr>
          <td className="elemento"><b>E-Mail UCTemuco:</b></td>
          <td className="elemento1">%mail%</td>
        </tr>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <form action="#" method="POST">
          <div className="act">
            <h3><b>Actualizar Datos de contacto</b></h3>
            <label for="correo"><b>E/mail alternativo</b></label>
            <br></br>
            <input name="correo" placeholder="Correo" />
            <br></br>
            <br></br>
            <label for="tel"><b>Numero celular personal</b></label>
            <br></br>
            <input name="tel" placeholder="Telefono" />
            <br></br>
            <br></br>
            <label for="telA"><b>Numero celular alternativo</b></label>
            <br></br>
            <input name="telA" placeholder="Telefono" />
            <br></br>
            <br></br>
            <button>Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoPe;
