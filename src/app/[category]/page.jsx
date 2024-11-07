import Product from "../components/product";

export default async function Category({params}){
    const {category} = await params;
    return(
        <section className="headphones-products-section">
            <Product tagNew={true} category={category}/>
            <Product direction="reverse-direction" category={category}/>
        </section>
    )
}