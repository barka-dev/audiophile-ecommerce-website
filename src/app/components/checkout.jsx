'use client'
import Backbtn from "./backbtn";
import EMoneyInfo from "./eMoneyInfo";
import SelectedProduct from "./selectedProduct";
import {useEffect, useRef, useState} from 'react'
import Link from "next/link";
import CODmessage from "./CODmessage";
import { useProduct } from "../contexts";
import CheckoutModal from "./checkoutModal";

export default function Checkout(){
    const {selectedProducts, getProductsById, setShowCheckoutModal, setShowCartModal,setShowNavModal, showCheckoutModal} = useProduct();
    const [result, setResult] = useState([]);
    // const radioRef = useRef(null);
    const [isChecked, setIsChecked] = useState(true);
    let totalPrice = 0;

    const handleCheck= ()=>{
        setIsChecked(!isChecked);
    }

    const continueAndPay = ()=>{
        setShowCheckoutModal(true);
        setShowCartModal(false);
        setShowNavModal(false);
    }

    useEffect(() => {
        if (selectedProducts && selectedProducts.length > 0) {
            const ids = selectedProducts.map((product) => product.productId);
            getProductsById(ids).then((products) => setResult(products));
        }else{
            setResult([]);
        }

    }, [selectedProducts, getProductsById]);

    return(
        <>
            <div className="checkout-top-wrapper">
                <Link className="checkout-back-btn back-button text" href={"/"}>Go Back</Link>
                <article className="checkout-container">
                    <h2 className="checkout-title">CHECKOUT</h2>
                    <section className="billing-section">
                        <p className="checkout-subtitle">Billing Details</p>
                        <div className="group-control">
                            <label className="checkout-label" htmlFor="name">Name</label>
                            <input className="checkout-input" type="text" name="name" id="name" placeholder="Alexei Ward"/>
                        </div>
                        <div className="group-control">
                            <label className="checkout-label" htmlFor="email">Email Address</label>
                            <input className="checkout-input" type="email" name="email" id="email" placeholder="alexei@mail.com"/>
                        </div>
                        <div className="group-control">
                            <label className="checkout-label" htmlFor="phone">Phone Number</label>
                            <input className="checkout-input" type="phone" name="phone" id="phone" placeholder="+1 202-555-0136"/>
                        </div>
                    </section>

                    <section className="shipping-section">
                        <p className="checkout-subtitle">shipping info</p>
                        <div className="group-control">
                            <label className="checkout-label" htmlFor="address">Address</label>
                            <input className="checkout-input" type="text" name="address" id="address" placeholder="1137 Williams Avenue"/>
                        </div>
                        <div className="group-control">
                            <label className="checkout-label" htmlFor="zip">ZIP Code</label>
                            <input className="checkout-input" type="number" name="zip" id="zip" placeholder="10001"/>
                        </div>
                        <div className="group-control">
                            <label className="checkout-label" htmlFor="city">City</label>
                            <input className="checkout-input" type="text" name="city" id="city" placeholder="New York"/>
                        </div>
                        <div className="group-control">
                            <label className="checkout-label" htmlFor="country">Country</label>
                            <input className="checkout-input" type="text" name="country" id="country" placeholder="United States"/>
                        </div>
                    </section>

                    <section className="payment-section">
                        <p className="checkout-subtitle">shipping info</p>
                        <label className="checkout-label" htmlFor="payment">Payment Method</label>
                        <div className="radios-group">
                            <label htmlFor="emoney" className="label-for-radio">
                                <input className="payment-radios" type="radio" name="payment" id="emoney" onChange={handleCheck} defaultChecked/>e-Money
                            </label>
                            <label htmlFor="cod" className="label-for-radio">
                                <input className="payment-radios" type="radio" name="payment" id="cod" onChange={handleCheck}/>Cash on Delivery
                            </label>
                        </div>
                        {isChecked ? <EMoneyInfo/> : <CODmessage/>}
                        
                    </section>
                </article>

                <article className="summary-container">
                    <h2 className="summary-title">summary</h2>
                    <div className="summary-products">
                    {
                        result.map((item, index)=>{
                            const currProduct = selectedProducts.filter((product)=>product.productId === item.id )[0];
                            if(currProduct){
                                totalPrice += (item.price*currProduct?.quantity);
                                return <SelectedProduct key={index} product={{...item, qte:currProduct?.quantity}}/>
                            }
                        })
                    }
                    </div>

                    <div className="summary-price-group">
                        <div className="summary-price-subgroup">
                            <p className="summary-text">TOTAL</p>
                            <h6 className="summary-price">$ {totalPrice}</h6>
                        </div>
                        <div className="summary-price-subgroup">
                            <p className="summary-text">SHIPPING</p>
                            <h6 className="summary-price">$ {50}</h6>
                        </div>
                        <div className="summary-price-subgroup">
                            <p className="summary-text">VAT (INCLUDED)</p>
                            <h6 className="summary-price">$ {1079}</h6>
                        </div>
                        <div className="summary-price-subgroup grand-total">
                            <p className="summary-text">GRAND TOTAL</p>
                            <h6 className="summary-price summary-price-grand">$ {totalPrice + 50 + 1079}</h6>
                        </div>
                    </div>
                    <button className="button orange-button pay-button" onClick={continueAndPay}>CONTINUE & PAY</button>

                </article>
            </div>

            {showCheckoutModal && <CheckoutModal />}
        </>
    )
}