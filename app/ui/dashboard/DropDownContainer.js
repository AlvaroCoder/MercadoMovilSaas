'use client';
import { fetchDataBrand, fetchDataCategories, fetchDataClass, fetchDataFamily, fetchDataPresentation, fetchDataSubClass, fetchDataSubFamily, fetchDataSubcategories, fetchSaveDataProduct, fetchTypeStore } from '@/app/lib/products';
import React, { createContext, useContext, useEffect, useState } from 'react'

const contextDopDownBox = createContext({
    idCategorie : 1,
    idSubCategorie : 0,
    idClass : 0,
    idSubClass : 0,
    idFamily : 0,
    idSubFamily : 0,
    dataText : {
        nameProduct : '',
        descriptionProduct : ''
    },
    changeIdValue : (idValue, type)=>{},
    handleChangeText :(event)=>{},
    saveDataProduct : async(urlImage)=>{},
    dataset : {
        typestore : [],
        categorie : [],
        subcategorie : [],
        class : [],
        subclass : [],
        family : [],
        subfamily : [],
        presentation : [],
        brand : []
    }
})

export function useDropDownContext() {
    return useContext(contextDopDownBox)
}

export default function DropDownContainer({children}) {
    const [dataset, setDataset] = useState({
        typestore : [],
        categorie : [],
        subcategorie : [],
        class : [],
        subclass : [],
        family : [],
        subfamily : [],
        presentation : [],
        brand : []
    });
    const [dataIdTypeStore, setDataIdTypeStore] = useState(1);
    const [dataIdCategorie, setDataIdCategorie] = useState(1);
    const [dataIdSubcategorie, setDataIdSubcategorie] = useState(1);
    const [dataIdClass, setDataIdClass] = useState(1);
    const [dataIdSubClass, setDataIdSubClass] = useState(1);
    const [dataIdFamily, setDataIdFamily] = useState(1);
    const [dataIdSubFamily, setDataIdSubFamily] = useState(1);
    const [dataIdPresentation, setDataIdPresentation] = useState(1);
    const [dataIdBrand, setDataIdBrand] = useState(1);
    const [dataText, setDataText] = useState({
        nameProduct : '',
        descriptionProduct : ''
    })
    useEffect(()=>{
        async function fetchData() {
            const dataServer = await fetchTypeStore();
            setDataset(prev=>({
                ...prev,
                typestore : dataServer.message
            }));
        }
        fetchData();
    },[]);

    const handleChangeText =(event)=>{
        event.preventDefault();
        const target = event.target;
        setDataText(prev=>({
            ...prev,
            [target.name] : target.value
        }));
    }

    const changeIdValue=(idValue, type)=>{
        if (type=="typestore") {
            (async()=>{
                const dataCategorie = await fetchDataCategories(idValue);
                setDataset(prev=>({
                    ...prev,
                    categorie : dataCategorie.message
                }))
            })();
            setDataIdTypeStore(Number(idValue));
        }
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
            (async ()=>{
                const dataPresentation = await fetchDataPresentation(dataIdSubcategorie);
                setDataset(prev=>({
                    ...prev,
                    presentation : dataPresentation.message
                }));
            })();
            setDataIdSubFamily(idValue);
            return;
        }
        if (type=="presentation") {
            (async ()=>{
                const dataBrand = await fetchDataBrand(dataIdCategorie);
                setDataset(prev=>({
                    ...prev,
                    brand : dataBrand.message
                }));
            })();
            setDataIdPresentation(idValue);
            return;
        }
        if (type=="brand") {
            setDataIdBrand(idValue);
            return;
        }
    }

    const saveDataProduct=async(urlImage)=>{
        const dataToSendBackend = {
            dataIdTypeStore,
            dataIdCategorie,
            dataIdSubcategorie,
            dataIdClass,
            dataIdSubClass,
            dataIdFamily,
            dataIdSubFamily,
            dataIdPresentation,
            dataIdBrand,
            nameProduct : dataText.nameProduct,
            descriptionProduct : dataText.descriptionProduct,
            urlImage
        }
        const response = await fetchSaveDataProduct(dataToSendBackend);
        return response;
    }
    
    return (
        <contextDopDownBox.Provider value={{saveDataProduct,dataText, handleChangeText, dataset, idCategorie:dataIdCategorie, changeIdValue}}>
            {children}
        </contextDopDownBox.Provider>
    )
};