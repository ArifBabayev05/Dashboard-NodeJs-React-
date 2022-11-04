import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Schedule, AddEvents, UpdateEvent, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Employees,
  EmployeeDetail,
  Calendar,
  Order,
  Kanban,
  Editor,
  ScheduleApp,
  Customers,
  CustomersDetail,
  DragOrder,
  HomeScreen,
  AuthScreen,
  SignUp
} from "./pages";





import { useStateContext } from "./contexts/ContextProvider";

const App = () => {


  const {
    activeMenu,
    themeSettings,
    currentMode,
  } = useStateContext();

  const [user, setUser] = useState(null)

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      {/* <Toaster
        position="top-right"
        reverseOrder={true}
      /> */}
      <ToastContainer/>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar user={user} />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar user={user} />
            </div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >

            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full" style={{ 'background-color': '#232323' }}>
              <Navbar user={user} setUser={setUser} />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<HomeScreen user={user} />} />
                <Route path="/signin" element={<AuthScreen setUser={setUser} />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/home" element={<HomeScreen user={user} />} />
                <Route path="/employees" element={<Employees user={user} />} />
                <Route path="/calendar" element={<Calendar user={user} />} />
                <Route path="/order" element={<Order user={user} />} />
                <Route path="/orderr" element={<DragOrder user={user} />} />

                <Route path="/kanban" element={<Kanban user={user} />} />
                <Route path="/editor" element={<Editor user={user} />} />
                <Route path="/employeedetail/:id" element={<EmployeeDetail user={user} />} />

                <Route path="/customers" element={<Customers user={user} />} />
                <Route path="/customers/:id" element={<CustomersDetail user={user} />} />




              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
