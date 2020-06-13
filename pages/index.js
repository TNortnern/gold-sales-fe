import React, { useState, useContext } from 'react';

import Navbar from '../src/components/Navbar';
import MobileNavbar from '../src/components/MobileNavbar';

import Container from '../src/components/utilities/Container';
import Hero from '../src/components/hero/Hero';

const index = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  return (
    <>
      <Navbar
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
      <Hero />

      <MobileNavbar
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
    </>
  );
};

export default index;
