'use client'

export default function AddToCardButton({productId}){
     // Save an array to localStorage
    const saveIds = (ids) => {
        localStorage.setItem('ids', JSON.stringify(ids));
    }

    // Retrieve the array from localStorage
    const getIds = () => {
        return JSON.parse(localStorage.getItem('ids')) || [];
    }

    // Add an ID to the array in localStorage
    const addId = () => {
        if (typeof window !== "undefined"){
            const ids = getIds();
            if (!ids.includes(productId)) { // Optional: check if ID already exists
                ids.push(productId);
                saveIds(ids);
            } 
        }
    }

    return <button className="button orange-button" onClick={addId}>ADD TO CART</button>
}