import Image from "next/image";
import QuantitySelector from "./quantitySelector";
export default function SelectedProduct(){
    return(
        <div className="selected-item-container">
            <Image className="selected-item-picture" src="/images/cart/image-xx99-mark-two-headphones.jpg" alt="selected item" width={64} height={64}/>
            <div className="selected-item-subgroup">
                <p className="text selected-item-name">XX99 MK II</p>
                <p className="selected-item-price">$ 2,999</p>
            </div>
            <div className="quantity-container">
               <QuantitySelector/>
            </div>
        </div>
    )
}