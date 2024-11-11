import Image from "next/image";
// import Link from "next/link";

export default function Product({categoryImage, tagNew, productName, description, url, direction}){
    return(
        <article className={`product-container ${direction && direction}`}>
            <picture>
                <source
                media="(min-width: 1024px)"
                srcSet={categoryImage.desktop}
                />
                <source
                media="(min-width: 768px)"
                srcSet={categoryImage.tablet}
                />
                <Image className="product-picture" src={categoryImage.mobile} alt="" width={327} height={352}/>
            </picture>
            <div className="product-content">
                {tagNew && <p className="subtitle-text product-subtitle">NEW PRODUCT</p>}
                <h2 className="product-title">{productName}</h2>
                <p className="text product-text">{description}</p>
                <a href={url}>
                    <button className="button orange-button regular-button-size product-button">See Product</button>
                </a>
            </div>

        </article>
    )
}