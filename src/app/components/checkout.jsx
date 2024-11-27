import EMoneyInfo from "./eMoneyInfo";

export default function Checkout(){
    return(
        <article className="checkout-container">
            <h3 className="checkout-title">CHECKOUT</h3>
            <section className="billing-section">
                <p className="checkout-subtitle">Billing Details</p>
                <div className="group-control">
                    <label className="checkout-label" htmlFor="name">Name</label>
                    <input className="checkout-input" type="text" name="name" id="name" placeholder="Alexei Ward"/>
                </div>
                <div className="group-control">
                    <label className="checkout-label" htmlFor="email">Email Address</label>
                    <input className="checkout-input" type="email" name="email" id="email" placeholder="alexei@mail.com"/>
                </div>
                <div className="group-control">
                    <label className="checkout-label" htmlFor="phone">Phone Number</label>
                    <input className="checkout-input" type="phone" name="phone" id="phone" placeholder="+1 202-555-0136"/>
                </div>
            </section>

            <section className="shipping-section">
                <p className="checkout-subtitle">shipping info</p>
                <div className="group-control">
                    <label className="checkout-label" htmlFor="address">Address</label>
                    <input className="checkout-input" type="text" name="address" id="address" placeholder="1137 Williams Avenue"/>
                </div>
                <div className="group-control">
                    <label className="checkout-label" htmlFor="zip">ZIP Code</label>
                    <input className="checkout-input" type="number" name="zip" id="zip" placeholder="10001"/>
                </div>
                <div className="group-control">
                    <label className="checkout-label" htmlFor="city">City</label>
                    <input className="checkout-input" type="text" name="city" id="city" placeholder="New York"/>
                </div>
                <div className="group-control">
                    <label className="checkout-label" htmlFor="country">Country</label>
                    <input className="checkout-input" type="text" name="country" id="country" placeholder="United States"/>
                </div>
            </section>

            <section className="patment-section">
                <p className="checkout-subtitle">shipping info</p>
                <label className="checkout-label" htmlFor="payment">Payment Method</label>
                <div>
                    <label htmlFor="emoney">
                        <input className="checkout-input" type="radio" name="payment" id="emoney"/>e-Money
                    </label>
                    <label htmlFor="cod">
                        <input className="checkout-input" type="radio" name="payment" id="cod"/>Cash on Delivery
                    </label>
                </div>
                <EMoneyInfo/>
            </section>
        </article>
    )
}