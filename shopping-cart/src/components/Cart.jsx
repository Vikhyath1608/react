import { useContext, useMemo } from "react"
import { cartContext } from "../context/cartContext"

const Cart=()=>{
    const{cart}=useContext(cartContext);
    const totalPrice=useMemo(()=>{
            return cart.reduce((total,item)=>
                total+item.price * item.quantity,0);
    },[cart]);
    return(
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length>0 ? (
                <>
                {cart.map(item=>(
                    <CartItem key={item.id} item={item}/>
                ))}
                <div cart-total>
                    Total Price:${totalPrice.toFixed(2)}
                </div>
                </>
            ):(
                    <p>Your Cart Is Empty!!!</p>
            )};


        </div>

    )
    
}
export default Cart