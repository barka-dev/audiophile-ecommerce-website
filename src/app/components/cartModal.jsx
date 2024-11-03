import SelectedProduct from "./selectedProduct";

export default function CartModal(){
    return(
        <>
        <div className="overlay"></div>
        <div className="cart-modal">
            <div className="cart-head">
                <h6>cart (3)</h6>
                <button className="text">Remove all</button>
            </div>
            <div className="cart-body">
                <SelectedProduct/>
                <SelectedProduct/>
                <SelectedProduct/>
            </div>
            <div className="cart-total">
                <p className="text">TOTAL</p>
                <h6>$ 5,396</h6>
            </div>
            <button className="button orange-button cart-checkout-button">checkout</button>
        </div>
        </>
    )
}