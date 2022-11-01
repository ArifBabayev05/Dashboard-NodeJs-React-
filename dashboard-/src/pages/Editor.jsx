import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import { DateTime } from "@syncfusion/ej2-react-charts";
import PublishEvent from "./PublishEvent";
import Loader from "./Loader";



const Calendar = ({ user }) => {

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:2006/schedule')

      .then(res => {
        setData(res.data)
        console.log(res.data)
      }).catch(err => console.log(err))
  }, [])



  return (
    <div>
      {user ? <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
        <div className='flex justify-between'>
          <Header category="App" title="Schedule" />
          <PublishEvent />


        </div>
        <ScheduleComponent
          height="550px"
          eventSettings={{ dataSource: data }}
          selectedDate={new Date(Date.now())}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]} />
        </ScheduleComponent>
      </div> : <Loader />}
    </div>
  );
};

export default Calendar;
