'use client';
import {  FormProduct } from '@/app/ui/dashboard';

export default async function page() {
    return (
    <div>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className='font-bold text-2xl'>Agregar Producto</p>
            <FormProduct/>
        </div>
    </div>
  )
};