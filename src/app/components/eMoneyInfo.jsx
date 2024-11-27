export default function EMoneyInfo(){
    return(
        <>
            <div className="group-control">
                <label className="checkout-label" htmlFor="emoney_num">e-Money Number</label>
                <input className="checkout-input" type="number" name="emoney_num" id="emoney_num" placeholder="238521993"/>
            </div>
            <div className="group-control">
                <label className="checkout-label" htmlFor="emoney_pin">e-Money PIN</label>
                <input className="checkout-input" type="number" name="emoney_pin" id="emoney_pin" placeholder="6891"/>
            </div>
        </>
    )
}