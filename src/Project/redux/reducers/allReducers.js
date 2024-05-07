import { combineReducers } from "redux";
import carriagesReducer from "./carriagesReducer";
import cartReducer from "./cartReducer";


const allReducers = combineReducers({
    carriages: carriagesReducer,
    cart: cartReducer, 
   
})                                                                                             

export default allReducers