import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConvoInForumApi,
  sendForumMessageApi,
  sendMessageInForum,
} from "../redux/actions/forum.actions";
import { getUsersApi } from "../redux/actions/users.actions";
import moment  from "moment";
const Chat = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUsersApi());
    dispatch(getConvoInForumApi());
    
  }, []);
  const users = [
    {
      name: "user1",
      online: true,
    },
    {
      name: "user3",
      online: true,
    },
    {
      name: "user4",
      online: true,
    },
    {
      name: "user2",
      online: false,
    },
    {
      name: "user17",
      online: false,
    },
    {
      name: "user8",
      online: true,
    },
  ];
  const [messages, setMessages] = useState([]);
  const [textMessage, setTextMessage] = useState("");
  return (
    <div className="border-solid border-gray-500">
      <div class="font-sans antialiased h-screen flex bg-blue-400 border-solid border-gray-900">
        <div class="bg-blue-darker flex-none w-64 pb-6 hidden md:block">
          <div class="text-white mb-2 mt-3 px-4 flex justify-between">
            <div class="flex-auto">
              <h1 class="font-semibold text-xl leading-tight mb-1 truncate">
                Chatroom
              </h1>
            </div>
            <div>
              <svg
                class="h-6 w-6 fill-current text-white opacity-25"
                viewBox="0 0 20 20"
              >
                <path
                  d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div class="mb-8">
            <div class="px-4 mb-2 text-white flex justify-between items-center">
              <div class="opacity-75">En Ligne</div>
              <div>
                <svg
                  class="fill-current h-4 w-4 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                </svg>
              </div>
            </div>

            {state.users.userList.map((elm) => (
              <div class="flex items-center px-4 mb-3 opacity-100">
                {/* <span
                  className={`border ${
                    elm.online
                      ? "border-green-800 bg-green-500"
                      : "border-gray-800 bg-gray-500"
                  } rounded-full w-3 h-3 mr-2`}
                ></span> */}
                <span class="text-white">{elm.name}</span>
              </div>
            ))}
          </div>

          <div></div>
        </div>

        <div class="w-full flex flex-col bg-white">
          <div class="px-6 py-4 flex-1 overflow-y-scroll">
            {state.forum.conversation.map((elm) =>{
                console.log("name",elm)
              let user = state.users.userList.find(us=>us.id==elm.sender)
              return  (
                <div class="flex items-start mb-4 text-sm">
                  <img
                    src="https://ca.slack-edge.com/T037T7E5P-U052CUTJC-g683b295c5aa-72"
                    class="w-10 h-10 rounded mr-3"
                  />
                  <div class="flex flex-col">
                    <div class="flex items-end">
                      <span class="font-bold mr-2 ">{user.name}</span>
                      <span class="text-grey text-xs ">{moment(elm.created_at).format('DD/MM/YYYY')}</span>
                    </div>
                    <p class=" text-black pt-1">{elm.message}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div class="pb-6 px-4 flex-none">
            <div class="flex items-center rounded-lg border-2 border-grey">
              <span class="text-3xl text-grey border-r-2 border-grey p-2">
                <svg
                  class="fill-current h-6 w-6 block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                </svg>
              </span>
              <input
                type="text"
                class="w-full px-4"
                placeholder="Message #general"
                value={textMessage}
                onChange={(event) => setTextMessage(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    console.log("enter press here! ");
                    let newText = {
                      sender: "user1",
                      sendTime: Date.now().toLocaleString(),
                      text: textMessage,
                    };

                    setTextMessage("");
                    console.log(state.auth.user) ; 
                    let userID = localStorage.getItem('userId')
                    dispatch(
                      sendForumMessageApi(Number(userID), textMessage)
                    );
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
