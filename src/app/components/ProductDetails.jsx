'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import AddToCardButton from './addToCardButton';
import SuggestedPoduct from './suggestedProduct';
import QuantitySelector from './quantitySelector';
import { useProduct } from '../contexts';

function ProductDetails({category, slug}) {
    const {getProductBySlug, selectedProducts, selectedProduct} = useProduct();
    const [result, setResult] = useState(null);
    const [numberSelected, setNumberSelected] = useState(1);

    
    useEffect(()=>{
        getProductBySlug(slug).then((product) => setResult(product));
    },[slug, getProductBySlug])
    
    if(!result){
        return <div>Loading...</div>;
    }
    
    const product = result[0];
    const currentProduct = selectedProducts.filter((product)=> product.productId === product.id);
    return (
        <>
            <section className="product-info">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={product.image.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={product.image.tablet}
                    />
                    <Image className="product-info-picture" src={product.image.mobile} alt={`product-${slug}`} width={327} height={327}/>
                </picture>
                <article className="product-info-subgroup">
                    {product.new && <p className="subtitle-text product-info-subtitle">NEW PRODUCT</p>}
                    <h2 className="product-info-title">{product.name}</h2>
                    <p className="text product-info-text">{product.description}</p>
                    <p className="product-info-price">$ {product.price}</p>
                    <div className="product-info-subgroup-level2">
                        <div className="quantity-container">
                            <QuantitySelector productId={product.id} numberSelected={numberSelected} setNumberSelected={setNumberSelected}/>
                        </div>
                        <AddToCardButton productId={product.id} numberSelected={numberSelected} setNumberSelected={setNumberSelected}/>
                    </div>
                </article>
            </section>

            <section className="product-features-section">
                <div className="product-features">
                    <h3>FEATURES</h3>
                    <p className="text product-info-text">{product.features}</p>
                </div>
                <div className="product-in-box">
                    <h3>in the box</h3>
                    <ul className="product-in-box-list">
                        {
                            product.includes.map((item, index)=>{
                                return (
                                    <li key={index} className="product-in-box-item">
                                        <span className="product-in-box-quantity">{item.quantity}x</span>
                                        <p className="text product-info-text">{item.item}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>

            <section className="gallery-section">
                <picture className="gallery-1">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={product.gallery.first.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={product.gallery.first.tablet}
                    />
                    <Image className="gallery gallery-1" src={product.gallery.first.mobile} alt="image-gallery-1" width={445} height={280}/>
                </picture>
                <picture className="gallery-2">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={product.gallery.second.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={product.gallery.second.tablet}
                    />
                    <Image className="gallery gallery-2" src={product.gallery.second.mobile} alt="image-gallery-2" width={445} height={280}/>
                </picture>
                <picture className="gallery-3">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={product.gallery.third.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={product.gallery.third.tablet}
                    />
                    <Image className="gallery gallery-3" src={product.gallery.third.mobile} alt="image-gallery-3" width={635} height={592}/>
                </picture>
            </section>

            <section className="suggestion-section">
                <h3>you may also like</h3>
                <div className="suggested-products-wrapper">
                    {
                        product.others.map((item, index)=>{
                            return <SuggestedPoduct key={index} path={`/${category}/${item.slug}`} name={item.name} image={item.image}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default ProductDetails