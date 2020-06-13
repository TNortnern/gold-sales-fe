import React from 'react';

const HeroText = () => {
  return (
    <>
      {/* <!-- hero text --> */}
      <div className='hero-text md:col-span-6 col-span-12'>
        <h1 className=' font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight'>
          Don't listen to what they say, Go See
        </h1>
        <hr className=' w-12 h-1 bg-orange-500 rounded-full mt-8' />
        <p className='text-gray-800 text-base leading-relaxed mt-8 font-semibold'>
          Your ultimate travel companion. Carries all the information you need
          while travelling
        </p>
        <div className='get-app flex space-x-5 mt-10 justify-center md:mb-0 -mb-48'>
          <a
            href='#'
            class='cta bg-orange-500 hover:bg-orange-600 px-3 py-3 rounded text-white font-normal w-full w- text-center'
          >
            Buy Gold
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroText;
