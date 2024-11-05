import Product from "../../components/product";

export default function Speakers(){
    return(
        <section className="headphones-products-section">
            <Product tagNew={true}/>
            <Product direction="reverse-direction"/>
        </section>
    )
}