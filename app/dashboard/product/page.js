import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fetchProductStandard } from '@/app/lib/products';
import Link from 'next/link';
export default async function page() {
  const dataProducStandard = await fetchProductStandard();
  const jsonDataProductStandard = await dataProducStandard.json();
  console.log(jsonDataProductStandard);
  return (
    <div className='w-full  py-2 '>
      <div className='w-full flex flex-row justify-between '>
        <p className='font-bold text-lg '>Productos Estandar</p>
        <Link href="/dashboard/product/add" className='p-3 bg-blue-600 font-bold text-center rounded-lg text-white'>Subir Producto</Link>
      </div>      
      <div className='mt-2'>
        <Table>
          <TableCaption>Lista de los productos Estandar</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Imagen</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Subcategoría</TableHead>
              <TableHead>Clase</TableHead>
              <TableHead>SubClase</TableHead>
              <TableHead>Familia</TableHead>
              <TableHead>Sub Familia</TableHead>
              <TableHead>Presentación</TableHead>
              <TableHead>Marca</TableHead>
              <TableHead>Producto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

          </TableBody>
        </Table>
      </div>
    </div>
  )
}
