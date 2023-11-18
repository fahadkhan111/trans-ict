import transIct from "../../assets/images/trans-ict.png";
import { NavbarData } from "../../data/navbarData";

const MobileDrawer = ({ handleToggleMenu }) => {
  return (
    <div className="grid lg:hidden fixed top-0 left-0 z-20 h-screen bg-white w-[80%] lg:w-[360px] border-r-4 border-[#800000]">
      <div className="space-y-8">
        <div className="grid place-items-center py-8 w-full bg-[#eff1f5]">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src={transIct} alt="TransIct Logo" className="w-48" />
          </a>
        </div>
        <div>
          <button
            onClick={handleToggleMenu}
            className="text-white bg-[#ffffff] hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-[33px] h-[33px] absolute top-[25px] right-[-15.5px] inline-flex items-center justify-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <ul className="flex flex-col space-y-3 px-8 font-medium lg:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
          {NavbarData.map((navbarData, index) => (
            <li key={index} className="nav-items-border">
              <a
                href={navbarData.href}
                className="block capitalize py-2 px-5 text-[#1C1C25] rounded hover:bg-gray-100 md:hover:bg-transparent"
                aria-current="page"
              >
                {navbarData.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileDrawer;
