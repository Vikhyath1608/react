import { useContext } from "react"
import { cartContext } from "../context/CartContext"

const CartItem=({item})=>{
    const{removeFromCart}=useContext(cartContext);
    return(
        <div className="cart-item">
            <h4>{item.name}(x{item.quantity})</h4>
            <div>
                <span>${(item.price*item.quantity).toFixed(2)}</span>
                <button className="remove-btn" onClick={()=>
                    removeFromCart(item.id)}>
                    
                </button>
            </div>

        </div>
    )
}