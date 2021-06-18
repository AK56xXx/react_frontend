import React from "react";
import { useToasts } from "react-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNewEvent } from "../redux/actions/events.action";
import { useEffect } from "react";
import { getUsersApi } from "../redux/actions/users.actions";
import { addNewMeetingApi } from "../redux/actions/meeting.actions";
import { useForm } from "react-hook-form";
const AddApointement = ({ show, close, dateEvent }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.users);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addNewMeetingApi(data, addToast));

    close();
  };
  useEffect(() => {
    dispatch(getUsersApi());
  }, []);

  const declineAppointement = () => {
    addToast("Réfus réussite  ", { appearance: "error", autoDismiss: true });
    close();
  };
  return (
    <div
      class={`fixed z-10 inset-0 overflow-y-auto w-full ${
        !show ? "hidden" : ""
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center  min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="bg-white  sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
              <div class="px-4 py-8 sm:px-10">
                <div class="relative mt-6">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm leading-5">
                    <span class="px-2 text-gray-500 bg-white">
                      Demande un roundez vous
                    </span>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="mt-6">
                    <div class="w-full space-y-6">
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="type" class="text-gray-600">
                            Destinataire:
                          </label>
                          <br />
                          <select
                            {...register("destinataire", { required: true })}
                            id="type"
                            class="pl-4 focus:ring-indigo-500 py-2 rounded-lg border border-gray-300 bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md"
                          >
                            {userList.map((elm) => {
                              return (
                                <option value={elm.id} key={elm.id}>
                                  Mr {elm.name}
                                </option>
                              );
                            })}
                          </select>
                          {errors.destinataire ? (
                            <label className="text-red">
                              Champs obligatoire
                            </label>
                          ) : null}
                        </div>
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="name" class="text-gray-600">
                            Nom:
                          </label>
                          <input
                            {...register("nom", { required: true })}
                            type="text"
                            id="name"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Nom"
                          />
                        </div>
                        {errors.nom ? (
                          <label className="text-red">Champs obligatoire</label>
                        ) : null}
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="firstName" class="text-gray-600">
                            Prénom:
                          </label>
                          <input
                            {...register("prenom", { required: true })}
                            type="text"
                            id="firstName"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Prénom"
                          />
                        </div>
                        {errors.prenom ? (
                          <label className="text-red">Champs obligatoire</label>
                        ) : null}
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="Insitut" class="text-gray-600">
                            Profession:
                          </label>
                          <input
                            {...register("profession", { required: true })}
                            type="text"
                            id="Insitut"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Profession"
                          />
                        </div>
                        {errors.profession ? (
                          <label className="text-red">Champs obligatoire</label>
                        ) : null}
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="Insitut" class="text-gray-600">
                            Email:
                          </label>
                          <input
                            placeholder="mail"
                            {...register("mail", {
                              required: true,
                              pattern:
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                            })}
                            type="email"
                            id="email"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Email"
                          />
                        </div>
                        {errors.email ? (
                          <label className="text-red">Email Invalide</label>
                        ) : null}
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="phone" class="text-gray-600">
                            Téléphone:
                          </label>
                          <input
                            {...register("telephone", { required: true })}
                            type="text"
                            id="phone"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Téléphone"
                          />
                          {errors.telephone ? (
                            <label className="text-red">
                              Champs obligatoire
                            </label>
                          ) : null}
                        </div>
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="subject" class="text-gray-600">
                            Sujet:
                          </label>
                          <input
                            {...register("sujet", { required: true })}
                            type="text"
                            id="subject"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Sujet"
                          />
                        </div>
                        {errors.sujet ? (
                          <label className="text-red">Champs obligatoire</label>
                        ) : null}
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="msg" class="text-gray-600">
                            Message:
                          </label>
                          <input
                            {...register("message", { required: true })}
                            type="text"
                            id="msg"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Message"
                          />
                        </div>
                        {errors.message ? (
                          <label className="text-red">Champs obligatoire</label>
                        ) : null}
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="letter" class="text-gray-600">
                            Joindre un fichier (Optionel):
                          </label>
                          <input
                            type="file"
                            id="letter"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Lettre moltivation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Confirmer
                    </button>

                    <button
                      onClick={close}
                      type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddApointement;
