import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux'
import { authUserApi } from "../redux/actions/auth.actions";
const Login = () => {
  let history = useHistory();
  let dispatch = useDispatch() ; 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(authUserApi(data,history))
    console.log(data);

    //history.replace("/main");
  };

  return (
    <div class="w-full h-screen font-sans bg-cover bg-landscape">
      <div class="container flex items-center justify-center flex-1 h-full mx-auto">
        <div class="w-full max-w-lg">
          <div class="leading-loose">
            <form
              class="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p class="mb-8 text-2xl font-light text-center text-black">
                Login
              </p>
              <div class="mb-2">
                <div class=" relative ">
                  <input
                    type="text"
                    id="login-with-bg-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                    })}
                  />
                </div>
                { errors.email && errors.email.type === "required" ? (
                  <label className="text-red">Champs Obligatoire</label>
                ) : errors.email && errors.email.type === "pattern" ? (
                  <label className="text-red">Adresse Email invalide</label>
                ) : null}
              </div>
              <div class="mb-2">
                <div class=" relative ">
                  <input
                    type="password"
                    id="login-with-bg-password"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password ? (
                    <label className="text-red">Champs obligatoire</label>
                  ) : null}
                </div>
              </div>
              <div class="flex items-center justify-between mt-4">
                <button
                  //   onClick={() => {
                  //     history.replace("/main");
                  //   }}
                  type="submit"
                  class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Se Connecter
                </button>
              </div>
              <div class="text-center">
                <a class="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
