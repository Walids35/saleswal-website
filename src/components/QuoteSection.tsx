import Image from 'next/image'
import React from 'react'

const QuoteSection = () => {
  return (
    <div className='w-full bg-my-blue h-64 '>
      <div className='max-w-6xl 2xl:max-w-7xl mx-auto bg-[url("/quote-element.svg")] bg-no-repeat h-full flex justify-center items-center'>
        <div className='flex flex-col items-center text-white text-center sm:text-start'>
          <h1 className='text-xl sm:text-4xl font-bold'>Overcome your B2B lead generation challenges</h1>
          <p className='text-center mt-3 text-sm sm:text-base p-3 w-full md:w-2/3'>Break through the hurdles of entering new markets, connect with key decision-makers, successfully launch new products, and drive significant sales pipeline growth.</p>
        </div>
      </div>
    </div>
  )
}

export default QuoteSection