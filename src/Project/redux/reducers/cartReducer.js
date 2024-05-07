
const products =[]

 const cartReducer = (state = products, action) =>{
    switch(action.type){
        case "ADD_PRODUCT":
            const newProducts=[...state, action.newProduct]
            return newProducts
        case "REMOVE_PRODUCT":
            return state.filter((item) => item.id!== action.id);
        default:
            return state
    }

    }
    export default cartReducer