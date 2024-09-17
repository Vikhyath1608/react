import { Children, createContext, createContext } from "react";
import { cartReducer } from "../reducer/cartReducer";

const createContext=createContext();
const CartProvider=({Children})=>
{
    const [cart,dispatch]=userReducer(cartReducer,)
    const addToCart=(item)=>
    {
        dispatch({type:"ADD_ITEM",payload:item});
    };
    const removeFromCart=(id)=>
    {
        dispatch({type:'REMOVE_ITEM',payload:{id}};)
    };
    return (
        <context.Provider value={{cart,addToCart,removeFromCart}}>
            {Children}
        </context.Provider>
    );
}
export {createContext,CartProvider};