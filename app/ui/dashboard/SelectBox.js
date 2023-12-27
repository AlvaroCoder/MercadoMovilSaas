'use client';

import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { useDropDownContext } from './DropDownContainer';

export default function SelectBox({title, label, type, keyExtractor}) {
    const {changeIdValue, dataset} = useDropDownContext();
    return (
    <>
        <Select onValueChange={(value)=>changeIdValue(value, type)}>
            <SelectTrigger>
                <SelectValue placeholder={title} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-black" >{label}</SelectLabel>
                    {
                        dataset[type].map((categorie, key)=>{
                            return (
                                <SelectItem key={key} className="text-black" value={String(categorie[keyExtractor])}>{categorie.nombre}</SelectItem>
                            )
                        })
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    </>
  )
}
