import Image from "next/image";

export default function Product({tagNew, direction}){
    return(
        <article className={`product-container ${direction && direction}`}>
            <picture>
                <source
                media="(min-width: 1024px)"
                srcSet={'/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'}
                />
                <source
                media="(min-width: 768px)"
                srcSet={'/images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'}
                />
                <Image className="product-picture" src="/images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg" alt="" width={327} height={352}/>
            </picture>
            <div className="product-content">
                {tagNew && <p className="subtitle-text product-subtitle">NEW PRODUCT</p>}
                <h2 className="product-title">XX99 Mark II Headphones</h2>
                <p className="text product-text">The new XX99 Mark II headphones is the pinnacle of pristine audio. 
                    It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                </p>
                <button className="button orange-button regular-button-size product-button">See Product</button>
            </div>

        </article>
    )
}