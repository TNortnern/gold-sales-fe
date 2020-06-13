import React from 'react';
import HeroText from './HeroText';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <div className='hero bg-gray-100 py-16'>
      {/* <!-- container --> */}
      <div className='container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto'>
        {/* <!-- hero wrapper --> */}
        <div className='hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center'>
          <HeroText />

          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
