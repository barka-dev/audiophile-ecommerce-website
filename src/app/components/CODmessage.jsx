import Image from 'next/image'
import React from 'react'

function CODmessage() {
  return (
    <div className='cod-container'>
        <Image src="/images/checkout/icon-cash-on-delivery.svg" alt='COD icon' width={48} height={48}/>
        <p className='text  cod-text'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. 
            Just make sure your address is correct so that your order will not be cancelled.</p>
    </div>
  )
}

export default CODmessage