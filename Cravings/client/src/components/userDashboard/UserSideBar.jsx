import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const UserSideBar = ({ active, setActive, open, setOpen }) => {
  return (
    <>
      <div className="p-3">
        {open ? (
          <div className="text-xl font-bold flex gap-3 items-center">
            <button onClick={() => setOpen(!open)}>
              <RxHamburgerMenu className="text-3xl" />
            </button>
            User Dashboard
          </div>
        ) : (
          <div className="text-3xl text-center">
            <button onClick={() => setOpen(!open)}>
              <RxHamburgerMenu />
            </button>
            
          </div>
        )}
        <hr />
        {open ? (
          <div className="grid gap-3 p-6">
            <button
              className={`flex gap-3 items-center p-3 rounded-xl 
                ${
                  active === "overview"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
              onClick={() => setActive("overview")}
            >
              {""}
              <TbChartTreemap /> Overview
            </button>
            <button
              className={`flex gap-3 items-center p-3 rounded-xl 
                ${
                  active === "profile"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
              onClick={() => setActive("profile")}
            >
              {""}
              <ImProfile /> Profile
            </button>

            <button
              className={`flex gap-3 items-center p-3 rounded-xl 
                ${
                  active === "orders"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
              onClick={() => setActive("orders")}
            >
              {""}
              <TiShoppingCart /> Orders
            </button>

            <button
              className={`flex gap-3 items-center p-3 rounded-xl 
                ${
                  active === "transactions"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
              onClick={() => setActive("transaction")}
            >
              {""}
              <TbTransactionRupee /> Transactions
            </button>

            <button
              className={`flex gap-3 items-center p-3  rounded-xl 
                ${
                  active === "helpdesk"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
              onClick={() => setActive("helpdesk")}
            >
              {""}
              <RiCustomerService2Fill /> Help Desk
            </button>
          </div>
        ) : (
          <div className="py-2 text-2xl gap-1 flex flex-col">
            <button
              className={`flex gap-3 items-center p-3  rounded-xl 
                ${
                  active === "overview"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
              onClick={() => setActive("overview")}
            >
              {""}
              <TbChartTreemap />
            </button>

            <button
              className={`flex gap-3 items-center  p-3 rounded-xl 
                ${
                  active === "profile"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
              onClick={() => setActive("profile")}
            >
              {""}
              <ImProfile />
            </button>

            <button
              className={`flex gap-3 items-center p-3  rounded-xl 
                ${
                  active === "orders"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
              onClick={() => setActive("orders")}
            >
              {""}
              <TiShoppingCart />
            </button>

            <button
              className={`flex gap-3 items-center p-3  rounded-xl 
                ${
                  active === "transactions"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
              onClick={() => setActive("transaction")}
            >
              {""}
              <TbTransactionRupee />
            </button>
            <button
              className={`flex gap-3 items-center p-3  rounded-xl 
                ${
                  active === "helpdesk"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
              onClick={() => setActive("helpdesk")}
            >
              {""}
              <RiCustomerService2Fill />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserSideBar;
