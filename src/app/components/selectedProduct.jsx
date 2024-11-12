import Image from "next/image";
import QuantitySelector from "./quantitySelector";
export default function SelectedProduct({data}){
    return(
        <div className="selected-item-container">
            <Image className="selected-item-picture" src={`/images/cart/image-${data.slug}.jpg`} alt="selected item" width={64} height={64}/>
            <div className="selected-item-subgroup">
                <p className="text selected-item-name">{data.name}</p>
                <p className="selected-item-price">$ {data.price}</p>
            </div>
            <div className="quantity-container">
               <QuantitySelector/>
            </div>
        </div>
    )
}