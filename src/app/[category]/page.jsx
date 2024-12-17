import Products from "../components/Products";


export default async function Category({params}){
    const { category } = await params;

    return(
        <section className="headphones-products-section">
            <Products category={category}/>
        </section>
    )
}