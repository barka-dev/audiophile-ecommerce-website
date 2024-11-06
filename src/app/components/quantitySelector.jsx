'use client'
import {useState } from "react";
export default function QuantitySelector(){
    const [quantity, setQuantity] = useState(1);

    const addQuantity = ()=>{
        quantity < 10 && setQuantity(quantity + 1); 
    }
    const reduceQuantity = ()=>{
        quantity > 1 && setQuantity(quantity - 1);  
    }
    return(
        <div className="quantity-wrapper">
            <button className="quantity-button decrease-quantity" onClick={reduceQuantity}>-</button>
            <input className="selected-item-quantity" type="number" name="quantity" value={quantity} onChange={()=>{}}/>
            <button className="quantity-button increase-quantity" onClick={addQuantity}>+</button>
        </div>
        
    )
}