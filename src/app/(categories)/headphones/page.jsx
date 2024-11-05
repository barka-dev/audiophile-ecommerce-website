import Product from "../../components/product";

export default function Headphones(){
    return(
        <section className="headphones-products-section">
            <Product tagNew={true}/>
            <Product direction="reverse-direction"/>
            <Product/>
        </section>
    )
}