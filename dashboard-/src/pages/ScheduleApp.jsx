import React from "react";
import { Route, Routes, Link } from "react-router-dom"
import { AddEvents, UpdateEvent } from "../components";
import MyCalendar from "./Schedule";
function ScheduleApp() {


  return (
    <>
      <nav className="navbar navbar-light bg-light">

        <div className="container-fluid align-items-center">
          <Link className="navbar-brand ms-2" to="/schedule">
            <h3>Agenda</h3>
          </Link>
          <span className="navbar-brand mb-0 h2 "><Link className="nav-link pe-0 " to={"/events/add"}>Add Event</Link></span>
        </div>
        <Routes>
          <Route path="/schedule" exact element={<MyCalendar />} />
          <Route path="/events/add" element={<AddEvents />} />
          <Route path="/event/:id/update" element={<UpdateEvent />} />
        </Routes>
      </nav>
    </>
  );
}



export default (ScheduleApp)