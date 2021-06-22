import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConvoByUserApi,
  sendMessageApi,
} from "../redux/actions/convo.action";
import { getUsersApi } from "../redux/actions/users.actions";
import "./customStyles.css";
const Messagerie = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  const { conversation } = useSelector((state) => state.convo);
  const [selectedUser, setSelectedUser] = useState({
    id:0
  });
  useEffect(() => {
    dispatch(getUsersApi());
  }, []);
  const [message, setMessage] = useState("");
  return (
    <div>
      <div class="h-screen w-full flex antialiased text-gray-200 bg-white overflow-hidden">
        <div class="flex-1 flex flex-col">
          <main class="flex-grow flex flex-row min-h-0">
            <section class="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
              <div class="header p-4 flex flex-row justify-between items-center flex-none">
                <div
                  class="w-16 h-16 relative flex flex-shrink-0"
                  style={{ filter: "invert(100%)" }}
                ></div>
              </div>
              <div class="search-box p-4 flex-none">
                <form onsubmit="">
                  <div class="relative">
                    <label>
                      <input
                        class="rounded-full py-2 pr-6 pl-10 w-full border border-gray-200 focus:border-gray-700 bg-gray-200 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                        type="text"
                        value=""
                        placeholder="Search Messenger"
                      />
                      <span class="absolute top-0 left-0 mt-2 ml-3 inline-block">
                        <svg viewBox="0 0 24 24" class="w-6 h-6">
                          <path
                            fill="#bbb"
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                          />
                        </svg>
                      </span>
                    </label>
                  </div>
                </form>
              </div>
              <div class="active-users flex flex-row p-2 overflow-auto w-0 min-w-full"></div>
              <div class="contacts p-2 flex-1 overflow-y-scroll">
                {userList.map((elm) => {
                  if (elm.id == selectedUser.id) {
                    return (
                      <button
                        class={`flex justify-between items-center p-3  bg-red-400 rounded-lg relative`}
                        onClick={() => {
                          let id = localStorage.getItem("userId");
                          dispatch(getConvoByUserApi(id, elm.id));
                          setSelectedUser(elm);
                        }}
                      >
                        <div class="w-16 h-16 relative flex flex-shrink-0">
                          <img
                            class="shadow-md rounded-full w-full h-full object-cover"
                            src="https://randomuser.me/api/portraits/lego/1.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                          <p className="text-black">{elm.name}</p>
                        </div>
                      </button>
                    );
                  } else {
                    return (
                      <button
                        class={`flex justify-between items-center p-3   hover:bg-red-400 rounded-lg relative`}
                        onClick={() => {
                          let id = localStorage.getItem("userId");
                          dispatch(getConvoByUserApi(id, elm.id));
                          setSelectedUser(elm);
                        }}
                      >
                        <div class="w-16 h-16 relative flex flex-shrink-0">
                          <img
                            class="shadow-md rounded-full w-full h-full object-cover"
                            src="https://randomuser.me/api/portraits/lego/1.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                          <p className="text-black">{elm.name}</p>
                        </div>
                      </button>
                    );
                  }
                })}
                {/* <div class="flex justify-between items-center p-3 hover:bg-red-400 rounded-lg relative">
                  <div class="w-16 h-16 relative flex flex-shrink-0">
                    <img
                      class="shadow-md rounded-full w-full h-full object-cover"
                      src="https://randomuser.me/api/portraits/women/61.jpg"
                      alt=""
                    />
                  </div>
                  <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                    <p className="text-black">Angelina Jolie</p>
                    <div class="flex items-center text-sm text-gray-600">
                      <div class="min-w-0">
                        <p class="truncate">
                          Ok, see you at the subway in a bit.
                        </p>
                      </div>
                      <p class="ml-2 whitespace-no-wrap">Just now</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
            <section class="flex flex-col flex-auto border-l border-gray-800">
              <div class="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
                <div class="flex">
                  <div class="w-12 h-12 mr-4 relative flex flex-shrink-0">
                    <img
                      class="shadow-md rounded-full w-full h-full object-cover"
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="text-sm text-black">
                    <p class="font-bold text-black">
                      {selectedUser && selectedUser.name}
                    </p>
                  </div>
                </div>
              </div>
              <div class="chat-body p-4 flex-1 overflow-y-scroll">
                {conversation.map((elm) => {
                  let id = localStorage.getItem("userId");
                  if (Number(id) == elm.receiver_id) {
                    console.log(elm.sender_id);
                    console.log("ID", id);
                    return (
                      <div class="flex flex-row justify-start py-2">
                        <div class="w-8 h-8 relative flex flex-shrink-0 mr-4">
                          <img
                            class="shadow-md rounded-full w-full h-full object-cover"
                            src="https://randomuser.me/api/portraits/lego/1.jpg"
                            alt=""
                          />
                        </div>

                        <div class="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                          <div class="flex items-center group">
                            <p class="px-6 py-3 rounded-t-full rounded-r-full bg-red-400 max-w-xs lg:max-w-md text-gray-200">
                              {elm.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (id == elm.sender_id) {
                    return (
                      <div class="flex flex-row justify-end">
                        <div class="messages text-sm text-white grid grid-flow-row gap-2">
                          <div class="flex items-center flex-row-reverse group"></div>
                          <div class="flex items-center flex-row-reverse group">
                            <p class="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                              {elm.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div class="chat-footer flex-none">
                <div class="flex flex-row items-center p-4">
                  <button
                    type="button"
                    class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                  >
                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                      <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                  >
                    <svg viewBox="0 0 20 20" class="w-full h-full fill-current">
                      <path d="M0,6.00585866 C0,4.89805351 0.893899798,4 2.0048815,4 L5,4 L7,2 L13,2 L15,4 L17.9951185,4 C19.102384,4 20,4.89706013 20,6.00585866 L20,15.9941413 C20,17.1019465 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1029399 0,15.9941413 L0,6.00585866 Z M10,16 C12.7614237,16 15,13.7614237 15,11 C15,8.23857625 12.7614237,6 10,6 C7.23857625,6 5,8.23857625 5,11 C5,13.7614237 7.23857625,16 10,16 Z M10,14 C11.6568542,14 13,12.6568542 13,11 C13,9.34314575 11.6568542,8 10,8 C8.34314575,8 7,9.34314575 7,11 C7,12.6568542 8.34314575,14 10,14 Z" />
                    </svg>
                  </button>

                  <div class="relative flex-grow">
                    <label>
                      <input
                        class="rounded-full py-2 pl-3 pr-10 w-full border border-gray-200 focus:border-gray-700 bg-gray-200 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                        type="text"
                        value={message}
                        onKeyUp={(event) => {
                          if (event.keyCode === 13) {
                            console.log("SELECTED", selectedUser);
                            let id = localStorage.getItem("userId");
                            dispatch(
                              sendMessageApi(Number(id), selectedUser.id, message)
                            );
                            setMessage("");
                          }
                        }}
                        onChange={(event) => {
                          setMessage(event.target.value);
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Messagerie;
