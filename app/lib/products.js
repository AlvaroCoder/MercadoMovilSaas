const BASE_URL = "http://localhost:8080/product/"
export async function fetchProductStandard() {
    return fetch(BASE_URL,{
        method:'GET',
        mode:'cors'
    });
}
export async function fetchDataCategories() {
    const dataCategories= await fetch(BASE_URL+"categories",{
        method : 'GET',
        mode :'cors'
    });
    const jsonDataCategories = await dataCategories.json();
    return jsonDataCategories;
}
export async function fetchDataSubcategories(idCategorie) {
    const dataSubCategories = await fetch(BASE_URL+`subcategories/?idCategorie=${idCategorie}`,{
        method : 'GET',
        mode : 'cors'
    });
    const jsonDataSubCategories = await dataSubCategories.json();
    return jsonDataSubCategories;
}

export async function fetchDataClass(idCategorie, idSubCategorie) {
    const dataClass = await fetch(BASE_URL+`class/?idCategorie=${idCategorie}&idSubCategorie=${idSubCategorie}`,{
        method : 'GET',
        mode : 'cors'
    });
    const jsonDataClass = await dataClass.json();
    return jsonDataClass;
    
}

export async function fetchDataSubClass(idCategorie, idSubCategorie, idClass) {
    const dataSubClass = await fetch(BASE_URL+`subclass/?idCategorie=${idCategorie}&idSubCategorie=${idSubCategorie}&idClass=${idClass}`,{
        method : 'GET',
        mode : 'cors'
    });
    const jsonDataSubClass = await dataSubClass.json();
    return jsonDataSubClass;
};

export async function fetchDataFamily(idCategorie, idSubCategorie, idClass, idSubClass) {
    const dataFamily = await fetch(BASE_URL+`family/?idCategorie=${idCategorie}&idSubCategorie=${idSubCategorie}&idClass=${idClass}&idSubClass=${idSubClass}`,{
        method : 'GET',
        mode : 'cors'
    });
    const jsonDataFamily = await dataFamily.json();
    return jsonDataFamily;
}

export async function fetchDataSubFamily(idCategorie, idSubCategorie, idClass, idSubClass, idFamily) {
    const dataSubFamily = await fetch(BASE_URL+`subfamily/?idCategorie=${idCategorie}&idSubCategorie=${idSubCategorie}&idClass=${idClass}&idSubClass=${idSubClass}&idFamily=${idFamily}`,{
        method : 'GET',
        mode : 'cors'
    });
    const jsonDataSubFamily = await dataSubFamily.json();
    return jsonDataSubFamily;
}
