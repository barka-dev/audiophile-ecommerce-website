import ProductCategory from "./productCategory";

export default function CategoriesSection(){
    return(
        <section className="categories-section">
          <ProductCategory productType="headphones"/>
          <ProductCategory productType="speakers"/>
          <ProductCategory productType="earphones"/>
        </section>
    )
}