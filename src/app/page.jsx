import Image from "next/image";
import Link from "next/link";
import ProductCategory from "./components/productCategory";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="header-content">
          <p className="header-subtitle">NEW PRODUCT</p>
          <h1 className="header-title">XX99 Mark II HeadphoneS</h1>
          <p className="header-text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link href="">
            <button className="header-button button orange-button">See Product</button>
          </Link>
        </div>
        <Image className="header-picture" src="/images/home/mobile/image-header.jpg" alt="header image" width={577} height={722}/>
      </section>

      <section className="categories-section">
        <ProductCategory productType="headphones"/>
        <ProductCategory productType="speakers"/>
        <ProductCategory productType="earphones"/>
      </section>

      <section className="products-section">
        <article className="product-type-one">
          <Image className="product-type-one-picture" src="/images/home/mobile/image-speaker-zx9.png" alt="ZX9 speaker" width={172} height={207} />
          <div className="product-type-one-subgroup">
            <h1 className="product-type-one-title">ZX9 <br/> SPEAKER</h1>
            <p className="product-type-one-description">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link href="">
              <button className="product-type-one-button button">See Product</button>
            </Link>
          </div>
        </article>

        <article className="product-type-two">
          <h4>ZX7 SPEAKER</h4>
          <Link href="">
            <button className="product-type-two-button button transparent-button">See Product</button>
          </Link>
        </article>

        <article className="product-type-three">
          <Image  className="product-type-three-picture" src="/images/home/mobile/image-earphones-yx1.jpg" alt="earphones YX1" width={327} height={200}/>
          <div className="product-type-three-subgroup">
            <h4>YX1 EARPHONES</h4>
            <Link href="">
              <button className="product-type-three-button button transparent-button">See Product</button>
            </Link>
          </div>
        </article>

      </section>
    </main>
  );
}
