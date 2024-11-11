import Image from "next/image";
import Link from "next/link";

export default function ProductCategory({productType}){
    return(
        <article className="product-category">
            <Image className="product-category-picture" src={`/images/shared/desktop/image-category-thumbnail-${productType}.png`} alt="product category" width={79} height={104}/>
            <h6 className="product-category-title">{productType}</h6>
            <Link href={`/${productType}`}>
                <button className="product-category-button">Shop</button>
                <Image src="/images/shared/desktop/icon-arrow-right.svg" alt="arrow right" width={8} height={12}/>
            </Link>
        </article>
    )
}