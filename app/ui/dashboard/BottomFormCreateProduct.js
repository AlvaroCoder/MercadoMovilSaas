'use client'
import React from 'react'

export default function BottomForm() {
  return (
    <div>
      <div>
        <p className='font-bold text-lg'>Nombre del Producto :</p>
        <input className='block w-full  border border-gray-300 p-2.5 my-2 rounded-sm' placeholder='Ingrese el nombre'></input>
      </div>
      <div>
        <p className='font-bold text-lg '>Descripcion del Producto :</p>
        <textarea className='block border border-gray-300 focus:border-blue-500 w-full  p-2.5 my-2 rounded-sm' placeholder='Descripción ... '></textarea>
      </div>     
      <div>
        <p className='font-bold text-lg '>Imagen del Producto :</p>      
      </div>   
    </div>
  )
};