import React from 'react'

async function Backbtn({params}) {
    const { category } = await params;
  return (
    <Link className="back-button text" href={`/${category}`} >Go Back</Link>
  )
}

export default Backbtn