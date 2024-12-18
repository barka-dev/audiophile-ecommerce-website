'use client'
import { useProduct } from "../contexts";
import { useState, useEffect } from "react";
import SelectedProduct from "./selectedProduct";
import Link from "next/link";

export default function CartModal(){
    const {selectedProducts, setSelectedProducts, getProductsById, setShowCartModal, setShowNavModal} = useProduct();
    const [result, setResult] = useState([]);
    const [show, setShow] = useState(true);
    const [numberSelected, setNumberSelected] = useState(1);
    let totalPrice = 0;
    

    const removeAll = () => {
        setSelectedProducts([]);
    }
    
    useEffect(() => {
        if (selectedProducts && selectedProducts.length > 0) {
            const ids = selectedProducts.map((product) => product.productId);
            getProductsById(ids).then((products) => setResult(products));
        }else{
            setResult([]);
        }

    }, [selectedProducts, getProductsById]);

    if (show)  
    return(
        <>
            <div className="overlay" onClick={()=>{setShow(false)}}></div>
            <div className="cart-modal">
                {
                    result.length === 0 ? <p style={{opacity:0.5, letterSpacing:2+'px'}} className="text">Empty Card</p> :
                
                <>
                    <div className="cart-head">
                        <h6>cart (3)</h6>
                        <button className="text" onClick={removeAll}>Remove all</button>
                    </div>
                    <div className="cart-body">
                        {
                            result.map((product, index)=>{
                                const currProductQte = selectedProducts.filter((p)=>p.productId === product.id )[0].quantity;
                                totalPrice += (product.price*currProductQte);
                                return <SelectedProduct key={index} product={product}/>
                            })
                        }
                    </div>
                    <div className="cart-total">
                        <p className="text">TOTAL</p>
                        <h6>$ {totalPrice}</h6>
                    </div>
                    <Link href="/checkout">
                        <button className="button orange-button cart-checkout-button" onClick={()=>{setShowCartModal(false); setShowNavModal(false)}}>checkout</button>
                    </Link>
                </>     
                }
            </div>
        </>
    )
}