import Image from "next/image";
import QuantitySelector from "./quantitySelector";
export default function SelectedProduct({product}){
    return(
        <div className="selected-item-container">
            <Image className="selected-item-picture" src={`/images/cart/image-${product.slug}.jpg`} alt="selected item" width={64} height={64}/>
            <div className="selected-item-subgroup">
                <p className="text selected-item-name">{product.name}</p>
                <p className="selected-item-price">$ {product.price}</p>
            </div>
            <div className="quantity-container">
               {product.qte ? <p className="summary-qte-product">x{product.qte}</p>  : <QuantitySelector productId={product.id}/>}
            </div>
        </div>
    )
}