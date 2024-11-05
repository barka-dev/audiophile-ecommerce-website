import AboutSection from "../components/aboutSection";
import CategoriesSection from "../components/categoriesSection";
import Header from "./@header/page";

export default function CategoriesLayout({ children}){
    return(
        <>
            <Header/>
            <main>
                {children}
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