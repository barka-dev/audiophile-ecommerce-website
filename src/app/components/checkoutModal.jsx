'use client'
import React, { useEffect, useState } from 'react'
import Overlay from './overlay'
import Image from 'next/image'
import SelectedProduct from './selectedProduct';

function CheckoutModal() {
     const [data, setData] = useState([]);
    const [result, setResult] = useState([]);
    const fetchData = async()=>{
        try{
            const response = await fetch("/data/products.json");
            if(!response.ok){
                throw new Error('Network response was ok')
            }
            const result = await response.json();
            setData(result);
        } catch (err){
            console.log(err.message);
        }
    }
    
    useEffect(() => {
        fetchData();
    
        const ids = JSON.parse(localStorage.getItem('ids')) || [];
        const filteredData = data.filter((item) => ids.includes(item.id));
        setResult(filteredData);

    }, [data]);
    
    return (
        <>
            <Overlay>
                <article className='checkoutmodal-container'>
                    <Image className='checkoutmodal-icon' src="/images/checkout/icon-order-confirmation.svg" alt='' width={64} height={64}/>
                    <div className='checkoutmodal-group-title'>
                        <h3 className='checkoutmodal-title'>THANK YOU<br/>FOR YOUR ORDER</h3>
                        <p className='text checkoutmodal-subtitle'>You will receive an email confirmation shortly.</p>
                    </div>
                    <div className='checkoutmodal-group-items'>
                        <div className='checkoutmodal-items'>
                            {
                                <SelectedProduct data={{...result[0], qte:1}}/>
                            }
                            {
                                result.length > 1 && <div className='checkoutmodal-items-text-container'><p className='checkoutmodal-items-text'>and {result.length-1} other item{result.length-1 > 1 && 's'}</p></div>
                            }
                        </div>
                        <div className='checkoutmodal-total'>
                            <p className='text checkoutmodal-total-text'>GRAND TOTAL</p>
                            <p className='checkoutmodal-total-price'>$ 5,446</p>
                        </div>
                        
                    </div>
                    <button className='button orange-button checkoutmodal-button'>BACK TO HOME</button>
                </article>
            </Overlay>
        </>
    )
}

export default CheckoutModal