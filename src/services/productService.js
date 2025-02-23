


export async function getProductList(searchTerm){
    const response = await fetch(`${import.meta.env.VITE_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    if(!response.ok){
        throw {message: response.statusText, status: response.statusText}
    }
    const data = await response.json()
    return data
}

export async function getProduct(id){
    const response = await fetch(`${import.meta.env.VITE_APP_HOST}/444/products/${id}`)
    if(!response.ok){
        throw {message: response.statusText, status: response.statusText}
    }
    const data = await response.json()
    return data
}

export  async function getFeaturedList(){
    const response = await fetch(`${import.meta.env.VITE_APP_HOST}/444/featured_products`)
    if(!response.ok){
        throw {message: response.statusText, status: response.statusText}
    }
    const data = await response.json()
    return data
}