import React from 'react'
import NavLinks from './navlinks'
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

export default function SideNav() {
  const links =[
    {nombre : 'Principal', href:"/dashboard", icon:HomeIcon},
    {nombre : 'Productos', href : "/dashboard/product", icon:UserGroupIcon},
    {nombre : 'Usuarios', href : "/dashboard/users", icon:DocumentDuplicateIcon}
  ]
  return (
    <div className='h-screen px-2 w-64 flex flex-col  items-center'>
      <div className='w-full px-2 h-44 flex items-end justify-center rounded-md bg-blue-600 my-2'>
        <p className='font-bold' >Mercado Movil</p>      
      </div>
      <div className='w-full flex flex-col'>
        <NavLinks links={links}/>
      </div>
      <div className='rounded-md w-full flex my-2 items-center'>
        <p>Cerrar Sesión</p>
      </div>
    </div>
  )
};