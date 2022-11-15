import React, { useState } from "react";
import "./arround";
import "./../App.css";
import { endpoint, axios } from "../services/http";
export default function DocumentPage() {
  const [value, setValue] = useState("");

  // const getPDF = async () => {
  //   const response = await axios.get(`${endpoint}/document`, {
  //     responseType: "blob",
  //   });
  //   const file = new Blob([response.data], { type: "application/pdf" });
  //   const file_url = URL.createObjectURL(file);
  //   window.open(file_url, "_blank");
  // };

  const getPDF = async () => {
    await axios
      .post(
        `${endpoint}/document`,
        { rut: 201577306, asunto: value.toString() },
        { responseType: "blob" }
      )
      .then((response) => {
        const newFile = new Blob([response.data], { type: "application/pdf" });
        const newFileUrl = URL.createObjectURL(newFile);
        window.open(newFileUrl, "_blank");
      });
  };

  return (
    <div>
      <form>
        <select
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          <option selected>Seleccione una opcion</option>
          <option>PARA LOS FINES QUE ESTIME CONVENIENTES</option>
          <option>SEGURO ESCOLAR</option>
        </select>
      </form>
      <button onClick={getPDF}>PDF</button>
    </div>
  );
}
