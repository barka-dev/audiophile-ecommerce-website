'use client';
import Image from "next/image";
import Link from "next/link";
import NavigationTabs from "./navigationTabs";
import NavigationModal from "./navigationModal";
import { useEffect, useState } from "react";
import CartModal from "./cartModal";
import Overlay from "./overlay";
import { useProduct } from "../contexts";

export default function Navigation(){
    // const [showNavModal, setShowNavModal] = useState(false);
    const {showCartModal, setShowCartModal,showNavModal, setShowNavModal, setShowCheckoutModal} = useProduct();
    const [windowWidth, setWindowWidth] = useState('');

    useEffect(()=>{
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize',()=>{
            setWindowWidth(window.innerWidth);
            if(window.innerWidth >= 1024){
                setShowNavModal(false);
            }
        })
    },[])

    const showMobileNav = ()=>{
        setShowNavModal(!showNavModal);
        setShowCartModal(false);
        setShowCheckoutModal(false);
    }

    const showCart = ()=>{
        setShowCartModal(!showCartModal);
        setShowNavModal(false);
        setShowCheckoutModal(false);
    }

    return(
        <>
            <nav className="nav-container">
                <div className="nav-sub-container">
                    <button className="burger-button" onClick={showMobileNav}>
                        <Image src="/images/shared/tablet/icon-hamburger.svg" alt="hamburger icon" width={16} height={15}/>
                    </button>

                    <Link href="/">
                        <Image src="/images/shared/desktop/logo.svg" alt="logo" width={143} height={25}/>
                    </Link>

                    <div className="tabs">
                        <NavigationTabs/>
                    </div>
                    
                    <button className="cart-button" onClick={showCart}>
                        <Image src="/images/shared/desktop/icon-cart.svg" alt="cart icon" width={23} height={20}/>
                    </button>

                    {showCartModal && <CartModal/>}
                </div>

            </nav>
            {(showNavModal && windowWidth < 1024) && <Overlay><NavigationModal/></Overlay>}
            
        </>
    )
}