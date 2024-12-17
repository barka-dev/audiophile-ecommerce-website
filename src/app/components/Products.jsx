'use client'
import React, { useEffect, useState } from 'react'
import Product from './product'
import { useProduct } from '../contexts';

function Products({category}) {
    const {getProductsByCategory} = useProduct();
    const [result, setResult] = useState(null);

    useEffect(()=>{
        getProductsByCategory(category).then((products)=> setResult(products));
    },[category, getProductsByCategory])

    if(!result){
        return <div>Loading...</div>;
    }
    
    return (
        <>
            {
                result.map((item, index)=>
                    <Product 
                        key={item.id} 
                        categoryImage={item.categoryImage} 
                        tagNew={item.new} productName={item.name} 
                        description={item.description} 
                        url={`/${category}/${item.slug}`} 
                        direction={(index+1)%2 === 0 && "reverse-direction"}
                    /> 
                )
            }
        </>
    )
}

export default Products