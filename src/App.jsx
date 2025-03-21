import React from 'react'
import Nav from "./Components/Nav"
import Hero from "./sections/Hero"
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReview from './sections/CustomerReview'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
const App = () =>(
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero/>
      </section>
      <section className='padding'>
      <PopularProducts/>
      </section>
      <section className='padding'>
      <SuperQuality/>
      </section>
      <section className='padding padding-x py-10'>
      <Services/>
      </section>
      <section className='padding'>
      <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
      <CustomerReview/>
      </section>
      <section className='padding-x sm:py-32 p-16 w-full'>
      <Subscribe/>
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
      <Footer/>
      </section>

    </main>
  )


export default App
