import React, { useState } from "react";
import "./NavBar.css";
import Image from "./logo.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [ToggleMenu, setToggleMenu] = useState(true);

  const navigate = useNavigate();

  return (
    <>
      <nav className="">
        <ul className="m-5 flex justify-between px-40">
          <li>
            <a href="/">
              <img className="navbarImage" src={Image} alt="Imagesd" />
            </a>
          </li>

          <li>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg hover:bg-gray-900 hover:text-white"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    setToggleMenu(!ToggleMenu);
                  }}
                >
                  Solutions
                  <svg
                    className="-mr-1 h-5 w-5 text-black hover:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Dropdown menu, show/hide based on menu state. */}
              <div
                className={
                  ToggleMenu
                    ? "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    : "hidden"
                }
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1 z-100" role="none">
                  {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                  <a
                    href="/design"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Design
                  </a>
                  <a
                    href="/audit"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Audit
                  </a>
                  <a
                    href="/consult"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    Consulting
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <button
              href="/"
              className=" hover:bg-gray-900 hover:text-white py-2 px-4 rounded-md font-semibold shadow-lg"
            >
              Services
            </button>
          </li>

          <li>
            <button
              href="/about"
              className=" hover:bg-gray-900 hover:text-white py-2 px-4 rounded-md font-semibold shadow-lg"
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </button>
          </li>

          <li>
            <button className="px-4 py-2  rounded-full bg-black text-white font-semibold shadow-lg" onClick={()=>{
              navigate("/contact")
            }}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
