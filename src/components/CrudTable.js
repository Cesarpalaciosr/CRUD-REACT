import React, {useEffect, setTotalReactPackages, useState}from 'react'
import { CrudTableRow } from './CrudTableRow'


export const CrudTable = () => {
    const [merchant, setMerchants] = useState(false);
    var rows = useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:3001')
            .then(console.log("conecte"))
            .then(response => {
                return response.text();
            })
            
            .then(data => {
                setMerchants(data);
            })
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    
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
                    <tr>
                        {rows}
                        <div>{merchant}</div>
                    </tr>
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
