import CategoriesSection from "./categoriesSection";

export default function NavigationModal(){
    return(
        <>
        <div className="overlay-navigation"></div>
        <nav className="navigation-modal">
            <CategoriesSection/>
        </nav>
        </>
    )
}