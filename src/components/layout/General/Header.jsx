// import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import Transition from "../../utils/Transition";
import LogoImg from "../../../assets/Logo.png";
// import Dropdown from "../../utils/Dropdown";

function Header() {
  // const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // const trigger = useRef(null);
  // const mobileNav = useRef(null);

  // close the mobile menu on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!mobileNav.current || !trigger.current) return;
  //     if (
  //       !mobileNavOpen ||
  //       mobileNav.current.contains(target) ||
  //       trigger.current.contains(target)
  //     )
  //       return;
  //     setMobileNavOpen(false);
  //   };
  //   document.addEventListener("click", clickHandler);
  //   return () => document.removeEventListener("click", clickHandler);
  // });

  // close the mobile menu if the esc key is pressed
  // useEffect(() => {
  //   const keyHandler = ({ keyCode }) => {
  //     if (!mobileNavOpen || keyCode !== 27) return;
  //     setMobileNavOpen(false);
  //   };
  //   document.addEventListener("keydown", keyHandler);
  //   return () => document.removeEventListener("keydown", keyHandler);
  // });

  return (
    <header
      className={`z-30 md:bg-opacity-90 transition duration-300 ease-in-out pt-8 pb-12 bg-highlight-eggshell
      `}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex-col sm:flex-row flex items-center justify-between h-16 md:h-20 relative">
          {/* Site branding */}
          <div className="shrink-0 mr-4 ">
            {/* Logo */}
            <Link to="/" className="flex items-center relative">
              <img className="mx-auto h-7" src={LogoImg} alt="Logo" />
              <div className="w-[16.5rem] origin-bottom -rotate-2 absolute bg-gradient-to-r from-[#ff7d0f] to-[#ffcd05] py-1 px-4 rounded-md text-sm text-white font-semibold tracking-widest flex items-center -left-[50%] mx-auto sm:-left-[20px] -bottom-[45px]">
                {[...Array(5)].map((x, i) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#ffcd05"
                    className="w-4 h-4"
                    key={i}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="ml-1"> "SUPERSTAR TRIO"</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow mt-16 sm:mt-0">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#about"
                  className="font-semibold text-link-main hover:text-link-hover px-5 py-3 flex items-center transition duration-150 ease-in-out underline"
                >
                  How does it work?
                </a>
              </li>
              <li>
                <a
                  href="https://ix0dy8pqosu.typeform.com/to/XZLHJIV8"
                  target="_blank"
                  rel="noreferrer"
                  className=" bg-primary-main hover:bg-primary-hover font-bold text-white py-2 px-4 rounded-full flex items-center"
                >
                  <span>Schedule a call</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          {/* <div className="flex md:hidden">
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-900"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
              >
                <ul className="px-5 py-2">
                  <li>
                    <Link
                      to="/pricing"
                      className="flex text-gray-600 hover:text-gray-900 py-2"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="flex text-gray-600 hover:text-gray-900 py-2"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tutorials"
                      className="flex text-gray-600 hover:text-gray-900 py-2"
                    >
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex text-gray-600 hover:text-gray-900 py-2"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="py-2 my-2 border-t border-b border-gray-200">
                    <span className="flex text-gray-600 hover:text-gray-900 py-2">
                      Resources
                    </span>
                    <ul className="pl-4">
                      <li>
                        <Link
                          to="/documentation"
                          className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                        >
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/support"
                          className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                        >
                          Support center
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/404"
                          className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                        >
                          404
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="/signin"
                      className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
                    >
                      <span>Schedule a call</span>
                    </Link>
                  </li>
                </ul>
              </Transition>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
