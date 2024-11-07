'use client'
import QuantitySelector from "@/app/components/quantitySelector";
import SuggestedPoduct from "@/app/components/suggestedProduct";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ProductDetail({params}){
    const router = useRouter();
    const { category, productSlug } = React.use(params);
    return(
        <>
            <Link className="back-button text" href="" onClick={()=>router.back()}>Go Back</Link>
            <section className="product-info">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={'/images/product-xx99-mark-two-headphones/desktop/image-product.jpg'}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={'/images/product-xx99-mark-two-headphones/tablet/image-product.jpg'}
                    />
                    <Image className="product-info-picture" src="/images/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt="product-xx99-mark-two-headphones" width={327} height={327}/>
                </picture>
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

            <section className="product-features-section">
                <div className="product-features">
                    <h3>FEATURES</h3>
                    <p className="text product-info-text">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. 
                        It includes intuitive controls designed for any situation. 
                        Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                        <br/><br/>
                        The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. 
                        It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. 
                        Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, 
                        cutting-edge technology, and a modern design aesthetic.
                    </p>
                </div>
                <div className="product-in-box">
                    <h3>in the box</h3>
                    <ul className="product-in-box-list">
                        <li className="product-in-box-item">
                            <span className="product-in-box-quantity">1x</span>
                            <p className="text product-info-text">Headphone Unit</p>
                        </li>
                        <li className="product-in-box-item">
                            <span className="product-in-box-quantity">2x</span>
                            <p className="text product-info-text">Replacement Earcups</p>
                        </li>
                        <li className="product-in-box-item">
                            <span className="product-in-box-quantity">1x</span>
                            <p className="text product-info-text">User Manual</p>
                        </li>
                        <li className="product-in-box-item">
                            <span className="product-in-box-quantity">1x</span>
                            <p className="text product-info-text">3.5mm 5m Audio Cable</p>
                        </li>
                        <li className="product-in-box-item">
                            <span className="product-in-box-quantity">1x</span>
                            <p className="text product-info-text">Travel Bag</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="gallery-section">
                <picture className="gallery-1">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={'/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={'/images/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'}
                    />
                    <Image className="gallery gallery-1" src="/images/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg" alt="image-gallery-1" width={445} height={280}/>
                </picture>
                <picture className="gallery-2">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={'/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={'/images/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg'}
                    />
                    <Image className="gallery gallery-2" src="/images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg" alt="image-gallery-2" width={445} height={280}/>
                </picture>
                <picture className="gallery-3">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={'/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={'/images/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'}
                    />
                    <Image className="gallery gallery-3" src="/images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg" alt="image-gallery-3" width={635} height={592}/>
                </picture>
            </section>

            <section className="suggestion-section">
                <h3>you may also like</h3>
                <div className="suggested-products-wrapper">
                    <SuggestedPoduct path={`/${category}/${productSlug}`}/>
                    <SuggestedPoduct path={`/${category}/${productSlug}`}/>
                    <SuggestedPoduct path={`/${category}/${productSlug}`}/>
                </div>
            </section>
        </>
    )
}