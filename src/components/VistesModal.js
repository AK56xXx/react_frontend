import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

import {
  acceptvisitesApi,
  refuseVisitesApi,
} from "../redux/actions/visites.actions";
const VisitesModal = ({ show, close, selectedApp }) => {
  const { addToast } = useToasts();
  const { selectedMeeting, confirmed } = useSelector((state) => state.visites);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [date_meeting, setDateMeeting] = useState(Date.now().toLocaleString());
  const confirmAppointment = () => {
    if (content == "") {
      let body = {
        content: "Votre demande à été accepté ",
        date_visite: date_meeting,
      };
      dispatch(acceptvisitesApi(selectedMeeting.id, body, addToast));
    } else {
      let body = {
        content: content,
        date_visite: date_meeting.toLocaleString(),
      };
      dispatch(acceptvisitesApi(selectedMeeting.id, body, addToast));
    }

    close();
  };
  const declineAppointement = () => {
    if (content == "") {
      let body = {
        content: "Votre demande à été refuser ",
      };
      dispatch(refuseVisitesApi(selectedMeeting.id, body, addToast));
    } else {
      let body = {
        content: content,
      };
      dispatch(refuseVisitesApi(selectedMeeting.id, body, addToast));
    }

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
            <div class="sm:flex sm:items-start">
              <div class="bg-white max-w-2xl  overflow-hidden sm:rounded-lg">
                <div>
                  <dl>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                        Nom & Prénom
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedMeeting.nom} {selectedMeeting.prenom}
                      </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">Sujet</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedMeeting.sujet}
                      </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">Email</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedMeeting.mail}
                      </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                        Téléphone
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedMeeting.telephone}
                      </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">Message</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedMeeting.message}
                      </dd>
                    </div>
                  </dl>
                </div>
                <h2>Réponse:</h2>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Date</dt>
                  <input
                    type="date"
                    value={date_meeting}
                    onChange={(event) => setDateMeeting(event.target.value)}
                    disabled={confirmed}
                  />
                  <div class=" p-5 w-40 bg-white rounded-lg">
                    <label class="text-gray-700" for="time">
                      <input
                        type="time"
                        class="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {!confirmed ? (
              <label class="text-gray-700" for="name">
                <textarea
                  class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Enter your comment"
                  name="comment"
                  rows="5"
                  cols="40"
                  value={content}
                  onChange={(event) => {
                    setContent(event.target.value);
                  }}
                ></textarea>
              </label>
            ) : (
              <div></div>
            )}
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {!confirmed ? (
              <div>
                <button
                  onClick={confirmAppointment}
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Confirmer
                </button>
                <button
                  onClick={declineAppointement}
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Refuser
                </button>
              </div>
            ) : (
              <div></div>
            )}
            <button
              onClick={close}
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitesModal;
