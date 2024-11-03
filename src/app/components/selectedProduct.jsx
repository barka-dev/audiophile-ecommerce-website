'use client'
import Image from "next/image";
import { useRef, useState } from "react";

export default function SelectedProduct(){
    const ref = useRef(null);
    const [quantity, setQuantity] = useState(1);

    const addQuantity = ()=>{
        quantity < 10 && setQuantity(quantity + 1); 
    }
    const reduceQuantity = ()=>{
        quantity > 1 && setQuantity(quantity - 1);  
    }
    return(
        <div className="selected-item-container">
            <Image className="selected-item-picture" src="/images/cart/image-xx99-mark-two-headphones.jpg" alt="selected item" width={64} height={64}/>
            <div className="selected-item-subgroup">
                <p className="text selected-item-name">XX99 MK II</p>
                <p className="selected-item-price">$ 2,999</p>
            </div>
            <div className="quantity-wrapper">
                <button className="quantity-button decrease-quantity" onClick={reduceQuantity}>-</button>
                <input className="selected-item-quantity" type="number" name="quantity" value={quantity} onChange={()=>{}}/>
                <button className="quantity-button increase-quantity" onClick={addQuantity}>+</button>
            </div>
        </div>
    )
}