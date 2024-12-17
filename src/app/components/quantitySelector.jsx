'use client'
import { useEffect, useState } from "react";
import { useProduct } from "../contexts";

export default function QuantitySelector({productId = null, numberSelected, setNumberSelected}){
    const {updateQuantityOfProduct} = useProduct();
    const [quantitySelected, setQuantitySelected] = useState(1);

    useEffect(()=>{
        if (numberSelected) setQuantitySelected(numberSelected);

        if(productId) updateQuantityOfProduct(productId, numberSelected)

    },[quantitySelected])

    const addQuantity = ()=>{
        quantitySelected < 10 && setQuantitySelected(quantitySelected + 1);
        if (numberSelected) setNumberSelected(numberSelected + 1);
    }
    const reduceQuantity = ()=>{
        quantitySelected > 1 && setQuantitySelected(quantitySelected - 1);
        if (numberSelected) setNumberSelected(numberSelected - 1);
    }
    return(
        <div className="quantity-wrapper">
            <button className="quantity-button decrease-quantity" onClick={reduceQuantity}>-</button>
            <input className="selected-item-quantity" type="number" name="quantity" value={quantitySelected} onChange={()=>{}}/>
            <button className="quantity-button increase-quantity" onClick={addQuantity}>+</button>
        </div>
        
    )
}