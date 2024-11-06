import AboutSection from "@/app/components/aboutSection";
import CategoriesSection from "@/app/components/categoriesSection";

export default function CategoriesLayout({children, header}){
    return(
        <>
            {header}
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