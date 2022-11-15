import React, { useEffect, useState } from "react";
import axios from "axios";

const endpoint = "http://localhost:8000/api";

const ShowUser = () => {
  const getAllUser = async () => {
    const response = await axios.get(`${endpoint}/user`);
    setUser(response.data);
    // let variable = localStorage.getItem("rut");
    // console.log(variable);
  };
  const [users, setUser] = useState([]);
  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead className="bg-primary text-white"></thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.nRegistro}>
              <td>{user.nombre}</td>
              <td>{user.ingreso}</td>
              <td>{user.rut}</td>
              <td>{user.correo}</td>
              <td>{user.domicilio}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUser;
