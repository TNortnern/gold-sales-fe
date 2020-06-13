import React, { useState, useContext } from 'react';
import HeroImage from '../src/components/hero/HeroImage';
import Navbar from '../src/components/Navbar';
import MobileNavbar from '../src/components/MobileNavbar';
import HeroText from '../src/components/hero/HeroText';
import Container from '../src/components/utilities/Container';
import RoutesState from '../src/context/RoutesState';
import RoutesContext from '../src/context/routesContext';

const index = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const routesContext = useContext(RoutesContext);
  return (
    <>
      <Navbar
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
      {/* <!-- hero --> */}
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
      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
        accusantium fuga corrupti? Eaque, sit vel sunt officia corrupti tempore
        tempora magni, ratione nemo sint aspernatur officiis voluptatum
        doloremque dicta quod expedita hic mollitia temporibus voluptatibus id
        ex labore dolorum. Aspernatur excepturi velit perferendis recusandae
        nulla tenetur repellat ab sapiente optio, qui aliquam, voluptates
        dignissimos laborum. Atque, fuga. Fugiat, cumque officia fuga
        repudiandae ipsa eos deleniti possimus, dignissimos molestiae asperiores
        vero repellendus aliquid aliquam. Eligendi exercitationem quisquam quis
        cumque nulla?
      </Container>

      {/* <!-- end hero --> */}
      <MobileNavbar
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
    </>
  );
};

export default index;
