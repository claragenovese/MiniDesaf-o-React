import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav-style'>
        <h2 className='nav-title'>MiniDesafío</h2>
        <div className='nav-routes'>
            <Link to='/'>
                <h2>Ruta 1</h2>
            </Link>
            <Link to='/routeTwo'>
                <h2>Ruta 2</h2>
            </Link>
        </div>
    </nav>
  )
}
