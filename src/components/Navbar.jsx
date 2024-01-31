import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-3 border-none lg:border px-2 fixed top-0 left-0 right-0 bg-[#f5f5f5ff] z-20">
      {/* 1st Div - Logo and Brand Name */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-2 mr-4">
          <img src="/logo.png" alt="logo" width={37} />
          <Link to="/" className="font-extrabold text-lg">
            Jio Saavn
          </Link>
        </div>
        {/* 2nd Div - Navigation Links */}
        <div className="flex text-[24px] lg:text-[15px] gap-5 text-gray-600 font-semibold h-full hidden lg:flex mx-5">
          <li className="list-none">Music</li>
          <li className="list-none">Podcasts</li>
          <li className="list-none">Go Pro</li>
        </div>
      </div>

      {/*  2nd Div - Search Bar and Go Pro */}
      <div className="flex flex-grow justify-between items-center lg:justify-start gap-2 lg:gap-5">
        {/* Search Bar */}
        <input
          type="text"
          name="Search"
          id="search"
          placeholder="Search Music"
          className="py-2 rounded-full w-full lg:w-[40vw] outline-none text-center border text-black"
        />
      </div>

      {/* 3rd Div - Account and Language */}
      <div className="flex justify-end items-center gap-4 hidden lg:flex mx-5">
        <div className="flex flex-col text-sm">
          <span className="text-[14px] text-gray-600 font-semibold">Music Languages</span>
          <span className="text-[12px] text-gray-500">Hindi</span>
        </div>
        <MdKeyboardArrowDown className="text-xl text-gray-500 mt-2" />
        <div className="flex text-[15px] gap-5 text-gray-600 font-semibold">
          <li className="list-none">Log IN</li>
          <li className="list-none">Sign Up</li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
