import React, { useEffect, useState } from "react";
import { navbarMenu } from "../../data/data";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [stkyClass, setStkyClass] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const scrollHandle = () => {
    if (window.scrollY > 40) {
      setStkyClass(true);
    } else {
      setStkyClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-300 bg-grayDark py-6 ${
        stkyClass ? "fixed w-full top-0 z-50" : "relative"
      }`}>
      <div className="container ">
        <nav className="flex justify-between items-center">
          <div className="text-2xl text-white">Logo</div>
          <ul
            className={`${
              openMenu ? "max-h-screen" : "max-h-0"
            } flex md:items-center absolute md:static md:flex-row md:w-auto md:overflow-visible  w-full top-[63px] left-0 flex-col bg-grayDark  z-10 items-start overflow-hidden transition-all duration-300 `}>
            {navbarMenu.map((navitem) => (
              <li key={navitem.id}>
                <NavLink
                  to={navitem.to}
                  className={({ isActive }) =>
                    (isActive ? "text-primary" : "text-white") +
                    " p-4  duration-300 hover:text-primary inline-block py-2 px-4"
                  }>
                  {navitem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div
          onClick={handleToggleMenu}
          className="flex group md:hidden absolute w-6 h-6 top-1/2 right-2 flex-col gap-[6px] cursor-pointer transform -translate-x-1/2 -translate-y-1/2">
          <span className="w-full h-[2px] bg-white"></span>
          <span className="transform translate-x-[4px] transition-all duration-300 hover:translate-x-0 w-full h-[2px] bg-white"></span>
          <span className="w-full h-[2px] bg-white"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
