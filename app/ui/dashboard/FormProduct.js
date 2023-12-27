'use client'
import React, { useState } from 'react'
import {SelectBox} from '.'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import CloseIcon  from "@mui/icons-material/Close";
import { ReloadIcon } from '@radix-ui/react-icons';
import { toast } from "sonner";
import { useDropDownContext } from './DropDownContainer';
function DropZone({handleChangeFile}) {
  return (
    <div className='w-full flex justify-center'>
          <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG or JPG  (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" onChange={handleChangeFile} type="file" className="hidden" />
              </label>
          </div> 
        </div>
  )
}
export default function FormProduct() {
  const {handleChangeText, dataText, saveDataProduct} = useDropDownContext();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleOnSubtmit=(e)=>{
    e.preventDefault();

  }
  const handleChangeFile=(e)=>{
    setFile(e.target.files[0]);
  }
  const handleCloseFile=(e)=>{
    e.preventDefault();
    setFile(null);
  }
  return (
    <form className='w-1/2' onSubmit={async(e)=>{
      e.preventDefault();

      setLoading(true);
      const formData = new FormData();
      formData.append('image',file)

      const response = await fetch('/api/upload',{
          method:'POST',
          body : formData
      });
      if (response.ok) {
        toast("Imagen Subida",{
          description : `Guardado correctamente ${file.name}`
        });
      }
      const responseJson = await response.json();
      const secure_url = responseJson.secure_url;

      const responseDataProducts = await saveDataProduct(secure_url);
      if (responseDataProducts.ok) {
        toast("Producto guardado",{
          description : `Guardado Correctamente`
        })
      }
      setLoading(false);
      }}>
        <div className='my-4'>
          <p className='font-bold text-lg'>Tipo de Tienda : </p>
          <SelectBox  title={"Tipo Tienda"} type={"typestore"} keyExtractor={"idTipoTienda"} label={"Tiendas"}/>
        </div>
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
        <div className='my-4'>
          <p className='font-bold text-lg'>Presentacion del Producto : </p>
          <SelectBox  title={"Presentación"} type={"presentation"} keyExtractor={"idPresentacion"} label={"Presentaciones"}/>                                        
        </div>
        <div className='my-4'>
          <p className='font-bold text-lg'>Marca del Producto : </p>
          <SelectBox  title={"Marca"} type={"brand"} keyExtractor={"idMarca"} label={"Marcas"}/>                                        
        </div>
        <div>
            <p className='font-bold text-lg'>Nombre del Producto :</p>
            <input value={dataText.nameProduct} name='nameProduct' onChange={handleChangeText} className='block w-full  border border-gray-300 p-2.5 my-2 rounded-sm' placeholder='Ingrese el nombre'></input>
          </div>
          <div>
            <p className='font-bold text-lg '>Descripcion del Producto :</p>
            <textarea value={dataText.descriptionProduct} onChange={handleChangeText} name='descriptionProduct' className='block border border-gray-300 focus:border-blue-500 w-full  p-2.5 my-2 rounded-sm' placeholder='Descripción ... '></textarea>
          </div> 
          <div>
            <p className='font-bold text-lg '>Imagen del Producto :</p>  
            {
              file ? 
              <div className='relative w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center'>
                  <div onClick={handleCloseFile} className='absolute w-10 h-10 rounded-[50%] cursor-pointer hover:bg-gray-200 right-0 top-0 flex justify-center items-center'> 
                    <CloseIcon/>
                  </div>
                  <Image height={400} width={300} alt='Imagen' src={URL.createObjectURL(file)} ></Image>
              </div> :
              <DropZone handleChangeFile={handleChangeFile} />
            }
          </div>   
            <div className='w-full flex justify-center my-4 border-t border-t-gray-300 py-4'>
              <Button disabled={loading} type='submit' className=' w-full bg-blue-700 rounded-sm px-4 py-2 text-center text-white'>
                {
                  !loading ? <>
                    Guardar Producto
                  </> : <>
                    <ReloadIcon className='className="mr-2 h-4 w-4 animate-spin"'/>
                    Cargando
                  </>
                }
              </Button>
            </div>
        
   </form>
  )
};