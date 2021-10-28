import React from "react";
import { CrudTableRow } from "./CrudTableRow";
//import axios from "axios";

export const CrudTable = ({ person }) => {
  function del() {
    var id_persona = prompt("Enter person id");
    /*axios.delete(`http://localhost:3001/persona/${id_persona}`,{
        headers: {
            "Content-Type": "application/json",
        },
        data: {
         id_persona
        }
      })*/
   
   fetch(`http://localhost:3001/persona/${id_persona}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
      });
  }

  function upd() {}

  return (
    <div className="table-wrapper">
      <h2>Tabla de datos</h2>
      <table className="fl-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
            <th>Sexo</th>
          </tr>
        </thead>
        <tbody>
          {person.map((el) => (
            <CrudTableRow key={el.id_persona} el={el} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <button onClick={del}>Eliminar</button>
            </td>
            <td>
              <button onClick={upd}>Actualizar</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
