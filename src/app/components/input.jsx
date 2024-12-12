import React from 'react'

function input() {
  return (
    <div className="group-control">
        <label className="checkout-label" htmlFor="name">Name</label>
        <input className="checkout-input" type="text" name="name" id="name" placeholder="Alexei Ward"/>
    </div>
  )
}

export default input