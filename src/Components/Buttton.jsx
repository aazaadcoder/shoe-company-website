import React from 'react'

const Buttton = ({label,iconURL} ) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat tex-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
        {label}
        <img 
        src={iconURL} 
        alt={label}
        className='ml-2 rounded-full size-5'
        />
    </button>
  )
}

export default Buttton
