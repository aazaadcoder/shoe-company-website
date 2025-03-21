import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({productDetails}) => {
  return (
    <div className="flex flex-1 flex-col w-full ">
      <img 
      src={productDetails?.imgURL} 
      alt= {`${productDetails.name} image`} 
      width={280}
      height={280}
      />
      <div className='flex flex-1 justify-start gap-2.5 mt-8'>
        <img 
        src={star}
        alt="star icon" 
        width={24}
        height={30}
        />
        <span className='font-montserrat text-xl leading-normal'>({productDetails.rating})</span>
      </div>
      <h3 className='mt-2 text-2xl font-palanquin font-semibold leading-normal'>{productDetails.name}</h3>
      <p className='mt-2 text-xl text-coral-red font-montserrat font-semibold leading-normal'>{productDetails.price}</p>
    </div>
  )
}

export default PopularProductCard
