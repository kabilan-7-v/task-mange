import React from "react";
import Dashboard from "./Dashboard";
import { Search } from "lucide-react";
import TaskList from "../components/TaskList";

function TaskListPage() {
  return (
    <div className="flex">
      <Dashboard></Dashboard>
      <div className="flex-1 h-screen bg-[#F9F5EE] pl-60">
        {/* Search bar */}
        <div className="w-full p-4">
          <div className="w-1/2 relative mt-8">
            <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-10 rounded-full shadow-gray-200 shadow-2xl bg-white"
            />
          </div>
        </div>

        <div className="bg-stone-300 h-0.5 w-full"></div>

        <TaskList/>
      </div>
    </div>
  );
}

export default TaskListPage;
