import React from 'react'
import { CrudTableRow } from './CrudTableRow'

export const CrudTable = (data) => {
    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
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
                {data.length > 0 ? <tr><td colSpan="3">Sin Datos</td></tr> : data.map(el => <CrudTableRow key = {el.id} el={el}/>)}
                </tbody>
                <tfoot>
                    <tr>
                    <th> 
                        aqui va algo
                    </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
