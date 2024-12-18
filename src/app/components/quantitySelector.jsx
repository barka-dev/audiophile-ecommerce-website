'use client'
import { useEffect, useState } from "react";
import { useProduct } from "../contexts";

export default function QuantitySelector({productId, numberSelected, setNumberSelected}){
    const {selectedProducts, setSelectedProducts} = useProduct();
    const [quantity, setQuantity] = useState(1);
    const product = selectedProducts.filter((product)=> product.productId === productId);
    const prevproduct = selectedProducts.filter((product)=> product.productId !== productId);

    useEffect(()=>{

        if(product && product.length>0){
            setQuantity(product[0].quantity);
        }
    },[])

    useEffect(()=>{
        if(numberSelected){
            setNumberSelected(quantity);
        }

        if(product && product.length>0){
            setSelectedProducts([...prevproduct, {productId:productId, quantity:quantity}])
        }

    },[quantity])

    const addQuantity = ()=>{
        setQuantity(quantity+1);
    }

    const reduceQuantity = ()=>{
        setQuantity(quantity-1);
    }
    return(
        <div className="quantity-wrapper">
            <button className="quantity-button decrease-quantity" onClick={reduceQuantity}>-</button>
            <input className="selected-item-quantity" type="number" name="quantity" value={quantity} onChange={()=>{}}/>
            <button className="quantity-button increase-quantity" onClick={addQuantity}>+</button>
        </div>
        
    )
}