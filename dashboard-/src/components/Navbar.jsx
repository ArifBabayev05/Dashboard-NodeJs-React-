import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar3.png";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = ({ user, setUser }) => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [user])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      {
        user ?
          <div className="flex">

            <NavButton
              title="Chat"
              dotColor="#fff"
              customFunc={() => handleClick("chat")}
              color={currentColor}
              icon={<BsChatLeft />}
            />

            <NavButton
              title="Notifications"
              dotColor="#fff"
              customFunc={() => handleClick("notification")}
              color={currentColor}
              icon={<RiNotification3Line />}
            />

            <TooltipComponent content="Profile" position="BottomCenter">
              <div
                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              >
                <img src={avatar} className="rounded-full w-8 h-8" alt="avatar" />
                <p>

                  <span className="text-gray-400 font-bold ml-1 text-14">
                    {user?.fullname}
                  </span>
                </p>

              </div>
            </TooltipComponent>

            <TooltipComponent content="Profile" position="BottomCenter">
              <div
                className="flex items-center mt-1 gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
                <a href='/signin' onClick={(e) => {
                  localStorage.removeItem("user")
                  setUser(null)
                }}>
                  <span className=" text-gray-400 font-bold ml-1 text-14">
                    Log Out
                  </span>
                </a>
              </div>
            </TooltipComponent>

            {isClicked.cart && <Cart />}
            {isClicked.chat && <Chat />}
            {isClicked.notification && <Notification />}
            {isClicked.userProfile && <UserProfile />}
          </div>
          :
          <div className="flex">

            <a href='/signin' className="py-3 px-3 mx-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">LogIn</a>
            <a href='/signup' className="py-3 px-3 mx-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Register</a>



          </div>
      }
    </div>
  );
};

export default Navbar;
