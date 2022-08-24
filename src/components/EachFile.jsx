import React from 'react'

export default function EachFile({nombre, edad, carrera, hobbie}) {
  return (
    <tr>
        <td>{nombre}</td>
        <td>{edad}</td>
        <td>{carrera}</td>
        <td>{hobbie}</td>
    </tr>
  )
}
