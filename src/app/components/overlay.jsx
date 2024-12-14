import React from 'react'

function Overlay({children}) {
    return (
        <>
            <div className="overlay-class"></div>
            {children}
        </>
    )
}

export default Overlay