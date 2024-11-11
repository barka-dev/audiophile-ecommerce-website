import QuantitySelector from "@/app/components/quantitySelector";
import SuggestedPoduct from "@/app/components/suggestedProduct";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { promises as fs } from "fs"

export default async function ProductDetail({params}){
    const { category, productSlug } = await params;
    const jsonDirectory = path.join(process.cwd(), "public/data");
    const fileContents = await fs.readFile(jsonDirectory + "/products.json", "utf8");
    const data = JSON.parse(fileContents);
    const result = productSlug ? data.filter((item) => item.slug === productSlug) : null;
 
    return(
        <>
            <Link className="back-button text" href={`/${category}`} >Go Back</Link>
            <section className="product-info">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={result[0].image.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={result[0].image.tablet}
                    />
                    <Image className="product-info-picture" src={result[0].image.mobile} alt="product-xx99-mark-two-headphones" width={327} height={327}/>
                </picture>
                <article className="product-info-subgroup">
                    {result[0].new && <p className="subtitle-text product-info-subtitle">NEW PRODUCT</p>}
                    <h2 className="product-info-title">{result[0].name}</h2>
                    <p className="text product-info-text">{result[0].description}</p>
                    <p className="product-info-price">$ {result[0].price}</p>
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
                    <p className="text product-info-text">{result[0].features}</p>
                </div>
                <div className="product-in-box">
                    <h3>in the box</h3>
                    <ul className="product-in-box-list">
                        {
                            result[0].includes.map((item, index)=>{
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
                        srcSet={result[0].gallery.first.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={result[0].gallery.first.tablet}
                    />
                    <Image className="gallery gallery-1" src={result[0].gallery.first.mobile} alt="image-gallery-1" width={445} height={280}/>
                </picture>
                <picture className="gallery-2">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={result[0].gallery.second.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={result[0].gallery.second.tablet}
                    />
                    <Image className="gallery gallery-2" src={result[0].gallery.second.mobile} alt="image-gallery-2" width={445} height={280}/>
                </picture>
                <picture className="gallery-3">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={result[0].gallery.third.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={result[0].gallery.third.tablet}
                    />
                    <Image className="gallery gallery-3" src={result[0].gallery.third.mobile} alt="image-gallery-3" width={635} height={592}/>
                </picture>
            </section>

            <section className="suggestion-section">
                <h3>you may also like</h3>
                <div className="suggested-products-wrapper">
                    {
                        result[0].others.map((item, index)=>{
                            return <SuggestedPoduct key={index} path={`/${category}/${item.slug}`} name={item.name} image={item.image}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}