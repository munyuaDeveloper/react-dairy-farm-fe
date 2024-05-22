import { useState } from 'react';
import { Outlet } from "react-router-dom";
import SidebarComponent from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLaylout = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled((state) => !state)

    console.log(toggled);
  }
  return (
    <div className="h-screen flex ">
      <SidebarComponent toggled={toggled} />
      <div className="grow h-[100%] overflow-y-auto">
        <Navbar toggleSidebar={handleToggle}/>
        <div className="py-10 px-8">
           <Outlet/>
        </div>
      </div>

    </div>

  );
};

export default DashboardLaylout;