import React, {useEffect, setTotalReactPackages, useState}from 'react'
import { CrudTableRow } from './CrudTableRow'


export const CrudTable = ({merchants}) => {
    
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
                        {merchants.map((el) => (<CrudTableRow key = {el.id_persona} el = {el}/>))}
                        
                    
                                            {/*merchants.length <0 ? (
                            <tr>
                                <td colSpan="3">Sin datos</td>
                            </tr>
                        )
                        : (merchants.map((el) => (<CrudTableRow key = {el.name} el = {el}/>)))*/}
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
