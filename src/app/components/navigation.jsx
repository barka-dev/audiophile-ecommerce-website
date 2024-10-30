'use client';
import Image from "next/image";
import Link from "next/link";
import NavigationTabs from "./navigationTabs";
import NavigationModal from "./navigationModal";
import { useState } from "react";

export default function Navigation(){
    const [showNavModal, setShowNavModal] = useState(false);

    const showMobileNav = ()=>{
        setShowNavModal(!showNavModal);
    }
    return(
        <>
            <nav className="nav-container">
                <button className="burger-button" onClick={showMobileNav}>
                    <Image src="/images/shared/tablet/icon-hamburger.svg" alt="hamburger icon" width={16} height={15}/>
                </button>

                <Link href="/">
                    <Image src="/images/shared/desktop/logo.svg" alt="logo" width={143} height={25}/>
                </Link>

                {/* <NavigationTabs/> */}
                
                <button className="cart-button">
                    <Image src="/images/shared/desktop/icon-cart.svg" alt="cart icon" width={23} height={20}/>
                </button>

            </nav>
            {showNavModal && <NavigationModal/>}
        </>
    )
}