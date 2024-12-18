'use client'
import { createContext, useContext, useState, useEffect} from "react";

export const ProductContext = createContext({
    selectedProducts: [],
    selectedProduct: [],
    showCartModal: false,
    showNavModal: false,
    showCheckoutModal: false,
    getProductsByCategory: async(category) =>[],
    getProductBySlug: async(slug) =>[],
    getProductsById: async(productsId) =>[],
})

export const ProductProvider = ({children}) =>{
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [showCartModal, setShowCartModal] = useState(false);
    const [showNavModal, setShowNavModal] = useState(false);
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    const getProductsByCategory = async(category)=>{
        const response = await fetch("/data/products.json");
        const data = await response.json();
        return data.filter((product)=> product.category === category)
                    .sort((a, b)=>{
                        if(a.new && !b.new) return -1;
                        if(!a.new && b.new) return 1;
                        return 0;
                    });
    }

    const getProductBySlug = async(slug) => {
        const response = await fetch("/data/products.json");
        const data = await response.json();
        return data.filter((product)=> product.slug === slug);
    }

    const getProductsById = async(productsId) => {
        const response = await fetch("/data/products.json");
        const data = await response.json();
        return data.filter((product)=> productsId.includes(product.id));
    }

    const updateQuantityOfProduct = (productId, quantity)=>{
        const updatedProduct = selectedProducts.map((product)=>
            product.productId === productId ? {...product, quantity: quantity} : product
        );
        setSelectedProducts(updatedProduct)
    }

    useEffect(()=>{
        const selectedProducts = JSON.parse(localStorage.getItem("selectedProducts"));
        if(selectedProducts && selectedProducts.length > 0){
            setSelectedProducts(selectedProducts);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts))
    },[selectedProducts])

    return (
        <ProductContext.Provider value={{showCheckoutModal, setShowCheckoutModal, showNavModal, setShowNavModal,showCartModal, setShowCartModal,selectedProducts, setSelectedProducts, selectedProduct, setSelectedProduct, getProductsByCategory, getProductBySlug, getProductsById, updateQuantityOfProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    return useContext(ProductContext);
}