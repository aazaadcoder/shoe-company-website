import React from 'react'

const Button = ({label,iconURL, bgColor, borderColor, textColor, width} ) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat tex-lg leading-none bg-${bgColor || "coral-red"} rounded-full text-${textColor || "white"} border-${borderColor || "coral-red"} border-2  ${width && `w-${width}`} `}>
        {label}
        {iconURL && (
          <img 
          src={iconURL} 
          alt={label}
          className='ml-2 rounded-full size-5'
          />
        )}
    </button>
  )
}

export default Button
