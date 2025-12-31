import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SiAccusoft } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbPhoneRinging } from "react-icons/tb";
import { IoIosLogIn } from "react-icons/io";
import { PiTrademarkRegisteredFill } from "react-icons/pi";

export const Header = () => {
  return (
    <>
      <div className=" flex justify-between  bg-amber-300 p-3 sticky top-0 ">
        <h1 className="ms-2.5">Makeup Store</h1>
        <div className=" flex gap-4 me-2.5">
          <Link
            to={"/"}
            className="flex items-center gap-0.5 hover:shadow p-1  hover:text-amber-50 "
          >
            <FaHome /> Home
          </Link>
          <Link
            to={"/about"}
            className="flex items-center gap-0.5 hover:shadow p-1 hover:text-amber-50"
          >
          
            <SiAccusoft/>
            About
          </Link>
          <Link
            to={"/product"}
            className="flex items-center gap-0.5 hover:shadow p-1 hover:text-amber-50"
          >
          
            <MdProductionQuantityLimits />
            Product
          </Link>
          <Link
            to={"/contact"}
            className="flex items-center gap-0.5 hover:shadow p-1 hover:text-amber-50"
          >
          
            <TbPhoneRinging />
            Contact
          </Link>
          <Link
            to={"/login"}
            className="flex items-center gap-0.5 border bg-amber-600 rounded hover:shadow p-1 hover:text-amber-50"
          >
          
            <IoIosLogIn />
            Login
          </Link>

          <Link
            to={"/signup"}
            className="flex items-center gap-0.5 border bg-amber-600 rounded hover:shadow p-1 hover:text-amber-50"
          >
          
            < PiTrademarkRegisteredFill />
            SignUp
          </Link>
        </div>
      </div>
      
    </>
  );
};
export default Header;
