import Image from "next/image";
import Link from "next/link";

export default function SuggestedPoduct({path, name, image}){
    return(
        <article className="suggested-product">
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet={image.desktop}
                />
                <source
                    media="(min-width: 768px)"
                    srcSet={image.tablet}
                />
                <Image className="suggested-product-picture" src={image.mobile} alt="other products" width={327} height={120}/>
            </picture>
            <h3 className="suggested-product-title">{name}</h3>
            <Link href={path}>
                <button className="button orange-button">see product</button>
            </Link>
        </article>
    )
}