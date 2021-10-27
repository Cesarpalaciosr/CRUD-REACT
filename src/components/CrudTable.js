import React from "react";
import { CrudTableRow } from "./CrudTableRow";

export const CrudTable = ({ person }) => {
  function del() {
    let id_persona = prompt("Enter person id");
    fetch(`http://localhost:3001/persona/${id_persona}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_persona }),
    })
      .then((response) => {
        return response.json();
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
