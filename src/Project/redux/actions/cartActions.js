export const addProduct = (newProduct) => {
    return{
        type: "ADD_PRODUCT",
        newProduct,
    };
} ;
export const removeProduct =(id) => {
    return{
        type: "REMOVE_PRODUCT",
        id,
    };
} ;