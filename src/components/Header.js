import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  let { path } = useRouteMatch();
  let history = useHistory(); 
  const {user} = useSelector((state)=>state.auth)
  return (
    <div className="container items-center ">
      <div className="text-gray-700 transition duration-500 ease-in-out transform bg-white  ">
        <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
          <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-400 to-blue-500"></div>
              <h2 className="block p-2 text-xl font-normal tracking-tighter text-gray-500 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-500 lg:text-x lg:mr-8">
                {" "}
                TT-HUB{" "}
              </h2>
            </div>
          </a>
          <nav className="flex flex-wrap items-center text-base justify-left ">
            <Link
              to={`${path}/`}
              className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            >
              Acceuil
            </Link>
            <Link
              to={`${path}/visite`}
              className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            >
              Visites
            </Link>
            <Link
              to={`${path}/rendezvous`}
              className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            >
              Rendez vous
            </Link>
            <Link
              to={`${path}/stages`}
              className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            >
              Stages
            </Link>
            <Link
              to={`${path}/depot`}
              className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            >
              Depots
            </Link>
            <Link
              to={`${path}/calender`}
              className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            >
              Calendrier
            </Link>
          </nav>
          <button className="block p-2 mr-4 text-gray-500 transition duration-500 ease-in-out transform rounded-full text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 lg:ml-auto" onClick={()=>{
            localStorage.clear() ; 
            history.replace('/') ; 

          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto icon icon-tabler icon-tabler-logout"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
            </svg>
          </button>
          <div className="relative ml-3">
            <div>
              <button
                className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
                onClick={(event) => {
                  event.preventDefault();
                  setShowMenu(!showMenu);
                }}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://d33wubrfki0l68.cloudfront.net/6d60ae66b2a50b1842d08156aeb53663fa328837/d7f97/assets/badges/mike.jpg"
                  alt=""
                />
              </button>
              <p>{user.name}</p>
            </div>
            <div
              className={`absolute ${
                showMenu ? "" : "hidden"
              } right-0 w-48 px-4 py-2 mt-2 transition duration-500 ease-in-out origin-top-right transform bg-white border rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  e`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <a
                href="#"
                className="block px-4 py-1 my-1 text-sm text-gray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                role="menuitem"
              >
                Profile
              </a>
              <Link
              to={`${path}/messagerie`}
                className="block px-4 py-1 my-1 text-sm text-gray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                role="menuitem"
              >
                Messagerie
              </Link>
              <Link
                to={`${path}/proposition`}
                className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
              >
                proposition
              </Link>
              <a
                href="#"
                className="block px-4 py-1 my-1 text-sm text-gray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
