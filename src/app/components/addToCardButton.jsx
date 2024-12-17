'use client'

import { useProduct } from "../contexts";

export default function AddToCardButton({productId, numberSelected}){
    const {selectedProducts, setSelectedProducts} = useProduct();
    const productSelected = {
        productId: productId,
        quantity: numberSelected || 1,
    }
    const addSelectedProduct = () => {
        if (typeof window !== "undefined"){
            if(selectedProducts && selectedProducts.length > 0 ){
                const isProductExist = selectedProducts.filter((product)=> product.productId === productId);
                if (isProductExist.length === 0) { // Optional: check if ID already exists
                    setSelectedProducts([...selectedProducts, productSelected]);
                }else{
                    console.log("Product already exists in cart");
                }
            }else{
                setSelectedProducts([productSelected]);
            }
        }
    }

    return <button className="button orange-button" onClick={addSelectedProduct}>ADD TO CART</button>
}