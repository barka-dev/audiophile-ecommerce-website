import Image from "next/image";
import Link from "next/link";
import AboutSection from "./components/aboutSection";
import CategoriesSection from "./components/categoriesSection";

export default function Home() {
  return (
    <>
      <header className="home-header">
        <section className="hero-section">
          <div className="header-content">
            <p className="subtitle-text header-subtitle">NEW PRODUCT</p>
            <h1 className="header-title">XX99 Mark II HeadphoneS</h1>
            <p className="text header-text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Link href="">
              <button className="header-button button orange-button">See Product</button>
            </Link>
          </div>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={'/images/home/desktop/image-hero.jpg'}
            />
            <source
              media="(min-width: 768px)"
              srcSet={'/images/home/tablet/image-header.jpg'}
            />
            <Image className="header-picture" src="/images/home/mobile/image-header.jpg" alt="header image" width={577} height={722} />
          </picture>
        </section>
      </header>
      
      <main>

        <section className="categories-section categories-section-home">
          <CategoriesSection/>
        </section>

        <section className="products-section">
          <article className="product-type-one">
            <Image className="product-type-one-pattern" src="/images/home/desktop/pattern-circles.svg" alt="ZX9 speaker" width={944} height={944} />
            <picture>
              <source
                  media="(min-width: 1024px)"
                  srcSet={'/images/home/desktop/image-speaker-zx9.png'}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={'/images/home/tablet/image-speaker-zx9.png'}
                />
              <Image className="product-type-one-picture" src="/images/home/mobile/image-speaker-zx9.png" alt="ZX9 speaker" width={172} height={207} />
            </picture>
            <div className="product-type-one-subgroup">
              <h1 className="product-type-one-title">ZX9 <br/> SPEAKER</h1>
              <p className="text product-type-one-description">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Link href="">
                <button className="product-type-one-button button">See Product</button>
              </Link>
            </div>
          </article>

          <article className="product-type-two">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={'/images/home/desktop/image-speaker-zx7.jpg'}
              />
              <source
                media="(min-width: 768px)"
                srcSet={'/images/home/tablet/image-speaker-zx7.jpg'}
              />
              <Image  className="product-type-two-picture" src="/images/home/mobile/image-speaker-zx7.jpg" alt="earphones YX1" width={327} height={320}/>
            </picture>
            <div className="product-type-two-content">
              <h4>ZX7 SPEAKER</h4>
              <Link href="">
                <button className="product-type-two-button button transparent-button">See Product</button>
              </Link>
            </div>
          </article>

          <article className="product-type-three">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={'/images/home/desktop/image-earphones-yx1.jpg'}
              />
              <source
                media="(min-width: 768px)"
                srcSet={'/images/home/tablet/image-earphones-yx1.jpg'}
              />
              <Image  className="product-type-three-picture" src="/images/home/mobile/image-earphones-yx1.jpg" alt="earphones YX1" width={327} height={200}/>
            </picture>
            <div className="product-type-three-subgroup">
              <h4>YX1 EARPHONES</h4>
              <Link href="">
                <button className="product-type-three-button button transparent-button">See Product</button>
              </Link>
            </div>
          </article>
        </section>
        <section className="about-section about-section-home">
          <AboutSection/>
        </section>
      </main>
    </>
  );
}
