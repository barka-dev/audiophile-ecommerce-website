import Image from "next/image";
import Link from "next/link";
import NavigationTabs from "./navigationTabs";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-subgroup-one">
                <Link href="">
                    <Image className="footer-logo" src="/images/shared/desktop/logo.svg" alt="" width={143} height={25}/>
                </Link>
                <NavigationTabs/>
            </div>
            <div className="footer-subgroup-two">
                <p className="text footer-text">Audiophile is an all in one stop to fulfill your audio needs. 
                    We’re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
                    Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <small className="footer-copyright">Copyright 2021. All Rights Reserved</small>
                <div className="footer-nested-subgroup">
                    <Link href="">
                        <Image className="footer-facebook-icon" src="/images/shared/desktop/icon-facebook.svg" alt="facebook" width={24} height={24}/>
                    </Link>
                    <Link href="">
                        <Image className="footer-twitter-icon" src="/images/shared/desktop/icon-twitter.svg" alt="twitter" width={24} height={20}/>
                    </Link>
                    <Link href="">
                        <Image className="footer-instagram-icon" src="/images/shared/desktop/icon-instagram.svg" alt="instagram" width={24} height={24}/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}