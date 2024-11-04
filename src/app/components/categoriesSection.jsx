import ProductCategory from "./productCategory";

export default function CategoriesSection(){
    return(
        <>
          <ProductCategory productType="headphones"/>
          <ProductCategory productType="speakers"/>
          <ProductCategory productType="earphones"/>
        </>
  
    )
}