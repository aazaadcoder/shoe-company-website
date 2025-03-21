import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex gap-10 flex-wrap '>
      <div>
        <img 
        src= {offer}
        alt="shoes offer" 
        />
      </div>
      
      
      <div className='flex flex-col justify-center'>
      <h1 className='font-palanquin text-4xl font-bold capitalize'><span className='text-coral-red'>Special</span> Offer</h1>
      <p className='mt-4 text-slate-gray text-lg leading-normal lg:max-w-lg font-montserrat'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
      </p>

      <p className='mt-6 text-slate-gray text-lg leading-normal lg:max-w-lg font-montserrat'>
      Navigate a realm of possiblities designed to fulfill your unique desires. surpassing the loftiest expectations. Your journey with us in nothing short of exceptionals.
      </p>

      <div className='flex mt-11 flex-wrap gap-4'>
        <Button
        label="View Details"
        />
        <Button
        bgColor = "white"
        borderColor = "black"
        textColor = "black"
        label="Learn more"
        />
      </div>

      </div>

      
    </section>
  )
}

export default SpecialOffer
