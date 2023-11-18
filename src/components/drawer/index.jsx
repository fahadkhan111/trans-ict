import transIct from "../../assets/images/trans-ict.png";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { LuClock9 } from "react-icons/lu";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FollowUsData } from "../../data/topNavbarData";

const Drawer = ({ handleToggleDrawer }) => {
  const contactData = [
    {
      icon: <SlLocationPin className="text-white" />,
      text: "State Of Themepul City, BD",
    },
    {
      icon: <HiOutlineMail className="text-white" />,
      text: "info@tronix.com",
    },
    {
      icon: <LuClock9 className="text-white" />,
      text: "Week Days: 09.00 to 18.00",
    },
    {
      icon: <BsFillTelephoneFill className="text-white" />,
      text: "(+259) 2257 6156",
    },
  ];
  return (
    <div className="hidden lg:flex fixed top-0 right-0 z-40 h-screen p-10 overflow-y-auto bg-white w-[360px] border-l-2 border-[#800000]">
      <div className="space-y-8">
        <div>
          <a href="https://flowbite.com/" className="flex items-center">
            <img src={transIct} alt="TransIct Logo" className="w-48" />
          </a>
          <button
            type="button"
            onClick={handleToggleDrawer}
            aria-controls="drawer-right-example"
            className="text-white bg-[#800000] hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-[50px] h-[50px] absolute top-4 right-2.5 inline-flex items-center justify-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="grid gap-3">
          <h4 className="capitalize text-[#1C1C25] text-3xl">about us</h4>
          <p className="text-[#7B7E86] text-base">
            The argument in favor of using filler text goes something like this:
            If you use real content in the Consulting Process, anytime you reach
            a review
          </p>
        </div>
        <div className="grid gap-8">
          <div className="grid gap-3">
            <h4 className="capitalize text-[#1C1C25] text-3xl">contact info</h4>
            <div className="grid gap-3">
              {contactData.map((contact, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <button
                    className={`flex items-center justify-center border-[1.5px] bg-[#800000] font-bold w-8 h-8 rounded-full`}
                  >
                    {contact.icon}
                  </button>
                  <p className="text-base text-[#7B7E86] font-medium">
                    {contact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-3">
            {FollowUsData.map((followUsData, index) => (
              <div className="flex justify-center items-center rounded-full w-10 h-10 bg-black">
                <a
                  key={index}
                  href={followUsData.link}
                  className="text-white rounded"
                  aria-current="page"
                >
                  {followUsData.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
