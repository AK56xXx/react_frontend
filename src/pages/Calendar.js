import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import AddEvent from "../components/AddEvent";
import { useState } from "react";
import { useSelector } from "react-redux";
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("13-06-2021");
  const [show, setShow] = useState(false);
  const {eventList} = useSelector((state) => state.events);
  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
  const showModal = (date) => {
    setSelectedDate(date.dateStr);
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <div className="mx-2 my-3">
      <AddEvent show={show} close={hideModal} dateEvent={selectedDate} />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={(val) => {
          alert(val.dateStr);
          showModal(val);
        }}
        events={eventList}
      />
    </div>
  );
};

export default Calendar;
