import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className=" border bg-gray-500 text-white  h-10 items-center flex  justify-between pe-2   sticky top-0">
       <h1 className=" text-2xl"> Registration </h1>

         <div className=" flex gap-5  ">
          <Link to={"/"} className="text-decoration-none text-light bg-primary">Registration</Link>
          <Link to={"/form"} className="text-decoration-none text-light bg-primary">Form</Link>
         </div>
      </div>

      

    </>
  );
};
export default Header;
