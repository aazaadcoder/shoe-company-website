import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({review}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className=''>
        <img 
        src={review.imgURL} 
        width={120}
        height={120}
        alt="" 
        className='rounded-full'
        />
      </div>
      <p className='info-text mt-6 max-w-sm text-center'>{review.feedback}</p>
      
      <div className='flex gap-2.5 mt-3 object-contain'>
        <img src={star} alt="" />
        <p className='text-xl text-slate-gray font-montserrat'>({review.rating})</p>
      </div>
      <h1 className='mt-1 text-3xl font-bold font-palanquin'>{review.customerName}</h1>
    </div>
  )
}

export default ReviewCard
