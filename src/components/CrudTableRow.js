import React from 'react'

export const CrudTableRow = ({el}) => {
    return (
        <div>
            <tr>
                <td>{el.name}</td>
                <td>{el.last_name}</td>
                <td><button>Eliminar</button><button>Actualizar</button></td>
            </tr>
        </div>
    )
}
