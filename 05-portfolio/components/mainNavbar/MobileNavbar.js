"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";

const MobileNavbar = ({ items }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="block md:hidden">
        {!openMenu ? (
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
            onClick={() => setOpenMenu(true)}
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        ) : (
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
            onClick={() => setOpenMenu(false)}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>
      {openMenu ? (
        <ul className="flex flex-col py-4 items-center w-100" style={{width:'100%'}}>
          {items.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default MobileNavbar;
