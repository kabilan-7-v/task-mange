import React from "react";
import { ListTodo, PlusCircle, LogOut } from "lucide-react";
import { Link,useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Dashboard() {
    const location = useLocation();
  
  
    // Function to check if the link is active
    const isActive = (path) => location.pathname === path;
  return (
    <div className="w-60 bg-[#F1EAD3] h-screen fixed left-0 top-0 flex flex-col justify-between">
      <div>
        <div className="h-8"></div>

        <div className="flex items-center justify-center">
          <img src={logo} className="w-[80px] h-[80px]" alt="Logo" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-lg font-medium">
          <Link
            to="/"
            className={`flex items-center gap-3 ${isActive("/")?"bg-indigo-600 text-white":"bg-[#F1EAD3] text-black"} hover:bg-indigo-600 hover:text-white w-48 py-2 px-4 rounded-lg transition duration-200`}
          >
            <ListTodo size={20} />
            Task Manager
          </Link>

          <Link
            to="/addtask"
            className={`flex items-center gap-3 ${isActive("/addtask")?"bg-indigo-600 text-white":"bg-[#F1EAD3] text-black"} hover:bg-indigo-600 w-48 hover:text-white py-2 px-4 rounded-lg transition duration-200`}
          >
            <PlusCircle size={20} />
            Add Task
          </Link>
        </div>
      </div>

      {/* Logout button */}
      <div className="mb-6 flex justify-center">
        <Link
          to="/logout"
          className="flex items-center gap-3 hover:bg-indigo-600 hover:text-white w-48 py-2 px-4 rounded-lg transition duration-200"
        >
          <LogOut size={20} />
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
