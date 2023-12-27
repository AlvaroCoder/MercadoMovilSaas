'use client';
import { fetchDataCategories, fetchDataClass, fetchDataFamily, fetchDataSubClass, fetchDataSubFamily, fetchDataSubcategories } from '@/app/lib/products';
import React, { createContext, useContext, useEffect, useState } from 'react'

const contextDopDownBox = createContext({
    idCategorie : 1,
    idSubCategorie : 0,
    idClass : 0,
    idSubClass : 0,
    idFamily : 0,
    idSubFamily : 0,
    changeIdValue : (idValue, type)=>{},
    dataset : {
        categorie : [],
        subcategorie : [],
        class : [],
        subclass : [],
        family : [],
        subfamily : []
    }
})

export function useDropDownContext() {
    return useContext(contextDopDownBox)
}

export default function DropDownContainer({children}) {
    const [dataset, setDataset] = useState({
        categorie : [],
        subcategorie : [],
        class : [],
        subclass : [],
        family : [],
        subfamily : []
    });
    const [dataIdCategorie, setDataIdCategorie] = useState(1);
    const [dataIdSubcategorie, setDataIdSubcategorie] = useState(1);
    const [dataIdClass, setDataIdClass] = useState(1);
    const [dataIdSubClass, setDataIdSubClass] = useState(1);
    const [dataIdFamily, setDataIdFamily] = useState(1);
    const [dataIdSubFamily, setDataIdSubFamily] = useState(1)
    useEffect(()=>{
        async function fetchDataxCategorie() {
            const dataCategories = await fetchDataCategories();
            setDataset(prev=>({
                ...prev,
                categorie : dataCategories.message
            }));
        }
        fetchDataxCategorie();
    },[]);

    const changeIdValue=(idValue, type)=>{
        if (type=="categorie") {
            (async()=>{
                const dataSubCategorie = await fetchDataSubcategories(idValue);
                setDataset(prev=>({
                    ...prev,
                    subcategorie : dataSubCategorie.message
                }))
            })()
            setDataIdCategorie(Number(idValue));
            return;
        }
        if (type=="subcategorie") {
            (async ()=>{
                const dataClass = await fetchDataClass(dataIdCategorie, idValue);
                setDataset(prev=>({
                    ...prev,
                    class : dataClass.message
                }))
            })();
            setDataIdSubcategorie(Number(idValue));
            return;
        }
        if (type=="class") {
            (async()=>{
                const dataSubClass = await fetchDataSubClass(dataIdCategorie, dataIdSubcategorie, idValue);
                setDataset(prev=>({
                    ...prev,
                    subclass : dataSubClass.message
                }))
            })();
            setDataIdClass(idValue);
            return;
        }
        if (type=="subclass") {
            (async()=>{
                const dataFamily = await fetchDataFamily(dataIdCategorie, dataIdSubcategorie, dataIdClass, idValue);
                setDataset(prev=>({
                    ...prev,
                    family : dataFamily.message
                }))
            })();
            setDataIdSubClass(idValue);
            return;
        }
        if (type=="family") {
            (async ()=>{
                const dataSubFamily = await fetchDataSubFamily(dataIdCategorie, dataIdSubcategorie, dataIdClass, dataIdSubClass, idValue);
                setDataset(prev=>({
                    ...prev,
                    subfamily : dataSubFamily.message
                }))
            })();
            setDataIdFamily(idValue);
            return;
        }
        if (type=="subfamily") {
            setDataIdSubFamily(idValue);
            return;
        }
        
    }
    
    return (
        <contextDopDownBox.Provider value={{dataset,idCategorie:dataIdCategorie,changeIdValue}}>
            {children}
        </contextDopDownBox.Provider>
    )
};