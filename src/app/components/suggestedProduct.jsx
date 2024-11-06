import Image from "next/image";
import Link from "next/link";

export default function SuggestedPoduct(){
    return(
        <article className="suggested-product">
            <Image className="suggested-product-picture" src="/images/shared/mobile/image-xx99-mark-one-headphones.jpg" alt="other products" width={327} height={120}/>
            <h3 className="suggested-product-title">XX99 MARK I</h3>
            <Link href="">
                <button className="button orange-button">see product</button>
            </Link>
        </article>
    )
}