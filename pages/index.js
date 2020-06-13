import React, { useState, useContext } from 'react';

import Navbar from '../src/components/Navbar';
import MobileNavbar from '../src/components/MobileNavbar';
import Hero from '../src/components/hero/Hero'
import WhatWeDo from '../src/components/whatwedo/WhatWeDo';

const index = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  return (
    <>
      <Navbar
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
      <Hero />

      <WhatWeDo />
      <MobileNavbar
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
    </>
  );
};

export default index;
