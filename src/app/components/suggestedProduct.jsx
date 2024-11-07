import Image from "next/image";
import Link from "next/link";

export default function SuggestedPoduct({path}){
    return(
        <article className="suggested-product">
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet={'/images/shared/desktop/image-xx99-mark-one-headphones.jpg'}
                />
                <source
                    media="(min-width: 768px)"
                    srcSet={'/images/shared/tablet/image-xx99-mark-one-headphones.jpg'}
                />
                <Image className="suggested-product-picture" src="/images/shared/mobile/image-xx99-mark-one-headphones.jpg" alt="other products" width={327} height={120}/>
            </picture>
            <h3 className="suggested-product-title">XX99 MARK I</h3>
            <Link href={path}>
                <button className="button orange-button">see product</button>
            </Link>
        </article>
    )
}