import React from "react";
import { useToasts } from "react-toast-notifications";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addNewEvent } from "../redux/actions/events.action";
import { useForm } from "react-hook-form";
import { addNewVisiteApi } from "../redux/actions/visites.actions";
const AddVisit = ({ show, close, dateEvent }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("nom", data.nom);
    formData.append("prenom", data.prenom);
    formData.append("profession", data.profession);
    formData.append("mail", data.mail);
    formData.append("telephone", data.telephone);
    formData.append("sujet", data.sujet);
    formData.append("message", data.message);
    formData.append("attachment", data.attachment);
    dispatch(addNewVisiteApi(formData, addToast));
  };
  const confirmAppointment = () => {
    dispatch(
      addNewEvent({
        title: title,
        date: dateEvent,
      })
    );
    addToast("Evenement Ajouter", { appearance: "success", autoDismiss: true });
    close();
  };
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="relative mt-6">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm leading-5">
                      <span class="px-2 text-gray-500 bg-white">
                        Demande une visite
                      </span>
                    </div>
                  </div>
                  <div class="mt-6">
                    <div class="w-full space-y-6">
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="name" class="text-gray-600">
                            Nom:
                          </label>
                          <input
                            type="text"
                            id="name"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Nom"
                            {...register("nom", { required: true })}
                          />
                        </div>
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="firstName" class="text-gray-600">
                            Prénom:
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Prénom"
                            {...register("prenom", { required: true })}
                          />
                        </div>
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="Insitut" class="text-gray-600">
                            Profession:
                          </label>
                          <input
                            type="text"
                            id="Insitut"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Profession"
                            {...register("profession", { required: true })}
                          />
                        </div>
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="Insitut" class="text-gray-600">
                            Email:
                          </label>
                          <input
                            type="email"
                            id="email"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Email"
                            {...register("mail", { required: true })}
                          />
                        </div>
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="phone" class="text-gray-600">
                            Téléphone:
                          </label>
                          <input
                            type="text"
                            id="phone"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Téléphone"
                            {...register("telephone", { required: true })}
                          />
                        </div>
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="subject" class="text-gray-600">
                            Sujet:
                          </label>
                          <input
                            type="text"
                            id="subject"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Sujet"
                            {...register("sujet", { required: true })}
                          />
                        </div>
                      </div>
                      <div class="w-full">
                        <div class=" relative ">
                          <label for="msg" class="text-gray-600">
                            Message:
                          </label>
                          <input
                            type="text"
                            id="msg"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Message"
                            {...register("message", { required: true })}
                          />
                        </div>
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
                            {...register("attachment")}
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

export default AddVisit;
