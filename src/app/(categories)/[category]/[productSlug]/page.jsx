import QuantitySelector from "@/app/components/quantitySelector";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail(){
    return(
        <>
            <Link className="back-button text" href="">Go Back</Link>
            <section className="product-info">
                <Image className="product-info-picture" src="/images/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt="product-xx99-mark-two-headphones" width={327} height={327}/>
                <article className="product-info-subgroup">
                    <p className="subtitle-text product-info-subtitle">NEW PRODUCT</p>
                    <h2 className="product-info-title">XX99 Mark II Headphones</h2>
                    <p className="text product-info-text">The new XX99 Mark II headphones is the pinnacle of pristine audio. 
                        It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <p className="product-info-price">$ 2,999</p>
                    <div className="product-info-subgroup-level2">
                        <div className="quantity-container">
                            <QuantitySelector/>
                        </div>
                        <button className="button orange-button">ADD TO CART</button>
                    </div>
                </article>
            </section>
        </>
    )
}