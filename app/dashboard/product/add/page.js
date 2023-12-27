import React from 'react'
import { BottomFormCreateProduct, SelectBox } from '@/app/ui/dashboard';

export default async function page() {
    return (
    <div>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className='font-bold text-2xl'>Agregar Producto</p>
            <form className='w-1/2'>
                <div className='my-4'>
                    <p className='font-bold text-lg'>Categoria : </p>
                    <SelectBox  title={"Categorias"} type={"categorie"} keyExtractor={"idCategoria"} label={"Categorias"}/>
                </div>
                <div className='my-4'>
                    <p className='font-bold text-lg'>Sub Categoria : </p>
                    <SelectBox  title={"Sub Categoria"} type={"subcategorie"} keyExtractor={"idSubcategoria"} label={"Subcategorias"}/>
                </div>
                <div className='my-4'>
                    <p className='font-bold text-lg'>Clase : </p>
                    <SelectBox  title={"Clase"} type={"class"} keyExtractor={"idClase"} label={"Clase"}/>                    
                </div>                
                <div className='my-4'>
                    <p className='font-bold text-lg'>Sub Clase : </p>
                    <SelectBox  title={"Sub Clase"} type={"subclass"} keyExtractor={"idSubClase"} label={"Sub Clase"}/>                    
                </div>                
                <div className='my-4'>
                    <p className='font-bold text-lg'>Familia : </p>
                    <SelectBox  title={"Familia"} type={"family"} keyExtractor={"idFamilia"} label={"Familia"}/>                                        
                </div>
                <div className='my-4'>
                    <p className='font-bold text-lg'>Sub Familia : </p>
                    <SelectBox  title={"Sub Familia"} type={"subfamily"} keyExtractor={"idSubFamilia"} label={"Sub Familia"}/>                                        
                </div>
                <div>
                    <BottomFormCreateProduct/>
                </div>
            </form>
        </div>
    </div>
  )
};