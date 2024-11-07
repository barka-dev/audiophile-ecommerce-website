import React from 'react';
export default function Header({params}){
    const { category } = React.use(params);
    return(
        <header>
            <h2 className="cat-header-title">{category}</h2>
        </header>
    )
}