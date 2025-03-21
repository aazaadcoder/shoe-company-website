import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../Components/ReviewCard'

const CustomerReview = () => {
  return (
    
    <section className='max-container flex flex-col items-center justify-center bg-pale-blue'>

      
        <h1 className='text-4xl font-bold w-full text-center font-palanquin'>What Our <span className='text-coral-red'>Customers</span> Say?</h1>
        <p className='mt-4 max-w-lg font-montserrat text-center text-lg leading-7 text-slate-gray w-full'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>


      <div className='flex flex-1 mt-24 justify-evenly gap-14 flex-wrap w-full'>
        {reviews.map((review) => (
          <div>
          <ReviewCard
          review = {review}
          />
        </div>
        ))}
      </div>

    </section>
  )
}

export default CustomerReview
