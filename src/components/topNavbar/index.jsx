import { ContactItemsData, FollowUsData } from "../../data/topNavbarData";

const TopNavbar = () => {
  return (
    <nav className="border-gray-200 py-3 bg-[#800000] dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap flex-col lg:flex-row items-center justify-center lg:justify-between mx-auto">
        <div
          className="w-full flex justify-center md:block md:w-auto"
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {ContactItemsData.map((contactData, index) => (
              <li
                className={`flex items-center justify-center gap-2 lg:pr-8 ${
                  index === ContactItemsData.length - 1
                    ? "md:border-none"
                    : "border-r-0 lg:border-r-[1.5px]"
                }`}
                key={index}
              >
                {contactData.icon}
                <a
                  href={contactData.link}
                  className="block pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  {contactData.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="w-full flex justify-center md:block md:w-auto"
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium rounded-lg md:flex-row md:space-x-8">
            <li className={`flex items-center gap-1`}>
              <p className="text-white text-base capitalize">follow us on:</p>
              {FollowUsData.map((followUsData, index) => (
                <a
                  key={index}
                  href={followUsData.link}
                  className="block pl-3 text-white rounded"
                  aria-current="page"
                >
                  {followUsData.icon}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
