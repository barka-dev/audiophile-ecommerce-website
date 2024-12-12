'use client'
import { useState, useEffect } from "react";
import SelectedProduct from "./selectedProduct";
import Error from "next/error";
import Link from "next/link";

export default function CartModal(){
    const [result, setResult] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(true);
    // const [totalPrice, setTotalPrice] = useState(0);
    let totalPrice = 0;

    const removeAll = () => {
        localStorage.setItem('ids', JSON.stringify([]));
    }

    const fetchData = async()=>{
        try{
            const response = await fetch("/data/products.json");
            if(!response.ok){
                throw new Error('Network response was ok')
            }
            const result = await response.json();
            setData(result);
        } catch (err){
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchData();
    
        const ids = JSON.parse(localStorage.getItem('ids')) || [];
        const filteredData = data.filter((item) => ids.includes(item.id));
        setResult(filteredData);

    }, [data]);

    // if (loading) return <strong>Loading...</strong>;
    // if (error) return <strong>Error: {error}</strong>;
    

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
                            result.map((item, index)=>{
                                totalPrice += item.price;
                                return <SelectedProduct key={index} data={item}/>
                            })
                        }
                    </div>
                    <div className="cart-total">
                        <p className="text">TOTAL</p>
                        <h6>$ {totalPrice}</h6>
                    </div>
                    <Link href="/checkout">
                        <button className="button orange-button cart-checkout-button">checkout</button>
                    </Link>
                </>     
                }
            </div>
        </>
    )
}