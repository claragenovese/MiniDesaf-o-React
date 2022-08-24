import React from 'react'
import { route1Data } from '../route1Data'
import EachFile from '../components/EachFile'

export default function RouteOne() {
    const files = route1Data.map((item, index) => (
        <EachFile 
            key={index}
            nombre={item.nombre}
            edad={item.edad}
            carrera={item.carrera}
            hobbie={item.hobbie}
        />
    ))
  return (
    <div className='route-1-style'>
        <h1>Ruta 1</h1>
        <table className="table-style table table-responsive table-striped table-dark table-hover 
        text-light mt-3">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Carrera</th>
                    <th scope="col">Hobbie</th>
                </tr>
            </thead>
            <tbody>
                {files}
            </tbody>
        </table>
    </div>
  )
}
