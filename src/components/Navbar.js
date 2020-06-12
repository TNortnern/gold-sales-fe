import { useSelector } from 'react-redux';
import Link from 'next/link';
const Navbar = ({ toggleMobileNav, setToggleMobileNav }) => {
  const routes = useSelector((state) => state.routes);
  return (
    <>
      {/* <!-- header --> */}
      <header class='header my-8'>
        {/* <!-- container --> */}
        <div class='container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto'>
          {/* <!-- header wrapper --> */}
          <div class='header-wrapper flex items-center justify-between'>
            {/* <!-- header logo --> */}
            <div class='header-logo'>
              <h1 class='font-semibold text-black leading-relaxed'>
                <a href=''>DigitalGold</a>
              </h1>
            </div>

            {/* <!-- mobile toggle --> */}
            <div class='toggle md:hidden'>
              <button
                onClick={() => {
                  setToggleMobileNav(true);
                }}
              >
                <svg
                  class='h-6 w-6 fill-current text-black'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              </button>
            </div>
            {/* <!-- Navbar --> */}
            <navbar class='navbar hidden md:block'>
              <ul class='flex space-x-8 text-sm font-semibold'>
                {routes.map((route) => (
                  <>
                    <li>
                      <Link href={route.href}>
                        <a
                          href={route.href}
                          class={`${
                            route.desktopClassList
                              ? route.desktopClassList
                              : 'hover:text-orange-500'
                          }`}
                        >
                          {route.name}
                        </a>
                      </Link>{' '}
                    </li>
                  </>
                ))}
              </ul>
            </navbar>
          </div>
        </div>
      </header>
      {/* <!-- end header --> */}
    </>
  );
};

export default Navbar;
