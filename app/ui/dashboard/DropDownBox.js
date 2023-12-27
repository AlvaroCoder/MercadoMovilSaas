'use client';
import React  from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { useDropDownContext } from './DropDownContainer';

export default function DropDownBox({title,  textButton, type, keyExtractor}) {
    const {changeIdValue, dataset} = useDropDownContext();

    return (
    <>
    <DropdownMenu>
        <DropdownMenuTrigger className='w-32'>{title}</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuRadioGroup value={0} onValueChange={(value)=> changeIdValue(value, type)}>
                {
                    dataset[type].map((categorie, key)=>{
                        return (
                            <DropdownMenuRadioItem key={key} value={categorie[keyExtractor]} >{categorie.nombre}</DropdownMenuRadioItem>
                        )
                    })
                }
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
        <DropdownMenuSeparator/>
        <DropdownMenuLabel >{textButton}</DropdownMenuLabel>
    </DropdownMenu>
    </>
    )
};