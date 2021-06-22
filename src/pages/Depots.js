import React, { useState, useCallback, useEffect } from "react";

import { useDropzone } from "react-dropzone";
import { getApi, postApi } from "../utils/apiUtils";
import { useSelector } from "react-redux";
import moment from "moment";
const Depots = () => {
  const state = useSelector((state) => state.auth);
  const [fileList, setFileList] = useState([]);
  let token = localStorage.getItem("token");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      let formData = new FormData();
      formData.append("adresse", file);
      formData.append("nom", state.user.name);

      let token = localStorage.getItem("token");
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      postApi("documents", formData, config).then((value) => {
        getApi("documents", config).then((value) => {
          setFileList(value.result);
        });
      });
    });

    // Do something with the files
  }, []);
  useEffect(() => {
    getApi("documents", config).then((value) => {
      setFileList(value.result);
      console.log("File LIST", value.result);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="h-screen w-full flex justify-center flex-col  ">
      <div
        {...getRootProps()}
        className="h-4/6 w-5/6 bg-blue-400 flex justify-center items-center rounded-lg ml-20 my-20"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-white">Drop the files here ...</p>
        ) : (
          <p className="text-white">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>

      <ul
        class="flex flex-col overflow-y-auto w-5/6 mx-10"
        style={{
          height: "40%",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {fileList &&
          fileList.map((elm) => (
            <li class="border-gray-400 flex flex-row mb-2">
              <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                  <a href="#" class="block relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                  <div class="font-medium dark:text-white">{elm.nom}</div>
                  <div class="text-gray-600 dark:text-gray-200 text-sm">
                    {elm.adresse}
                  </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                  {moment(elm.created_at).format("DD-MM-YYYY")}
                </div>
                <button
                  class="w-24 text-right flex justify-end"
                  onClick={() => {
                    
                    const link = document.createElement("a");
                    link.href = elm.adresse;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <svg
                    width="12"
                    fill="currentColor"
                    height="12"
                    class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Depots;
