import Product from "../components/product";

export default function Headphones(){
    return(
        <>
            <header>
                <h2 className="cat-header-title">HEADPHONES</h2>
            </header>

            <main>
                <section className="headphones-products-section">
                    <Product tagNew={true}/>
                    <Product/>
                    <Product/>
                </section>
            </main>

        </>
    )
}