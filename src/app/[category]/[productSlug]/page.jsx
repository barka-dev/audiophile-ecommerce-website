import Link from "next/link";
import ProductDetails from "@/app/components/ProductDetails";

export default async function ProductDetail({params}){
    const { category, productSlug } = await params;
 
    return(
        <>
            <Link className="back-button text" href={`/${category}`} >Go Back</Link>
            <ProductDetails category={category} slug={productSlug}/>
        </>
    )
}