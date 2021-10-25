import React from 'react'

export const CrudTableRow = ({el}) => {
    let {id_persona, no_persona, ap_persona,ci_persona, sx_persona} = el;
    return (
        <div>
            <tr>
                <td>{id_persona}</td>
                <td>{no_persona}</td>
                <td>{ap_persona}</td>
                <td>{ci_persona}</td>
                <td>{sx_persona}</td>
                <td><button>Eliminar</button><button>Actualizar</button></td>
            </tr>
        </div>
    )
}
