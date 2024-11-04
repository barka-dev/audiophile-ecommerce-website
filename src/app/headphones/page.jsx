import AboutSection from "../components/aboutSection";
import CategoriesSection from "../components/categoriesSection";
import Product from "../components/product";

export default function Headphones(){
    return(
        <>
            <header>
                <h2 className="cat-header-title">HEADPHONES</h2>
            </header>

            <main>
                <section className="headphones-products-section">
                    <Product tagNew={true}/>
                    <Product direction="reverse-direction"/>
                    <Product/>
                </section>
                <section className="categories-section categories-section-headphones">
                    <CategoriesSection/>
                </section>
                <section className="about-section about-section-headphones">
                    <AboutSection/>
                </section>
            </main>

        </>
    )
}