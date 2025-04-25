import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = ({ refresh }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  const submitTask = async () => {
    if (!title || !description || !dueDate || !priority) return;
  
    const newTask = {
      _id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      expectedFinishTime: dueDate,
      priority,
      status: 'pending'
    };
  
    await axios.post('https://taskmanger-backend-9oza.onrender.com/api/tasks', newTask);
    toast.success('Task added successfully!');

    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Low');
    refresh();
  };
  
  return (
    <>
    <div className="mb-6 pt-24 px-8  w-full lg:w-[900px] mx-auto">
      <div className="bg-white p-18  rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add New Task</h2>
  
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label className="block text-gray-700 mb-2 text-lg">Task Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full p-4 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter task title"
            />
          </div>
  
          <div>
            <label className="block text-gray-700 mb-2 text-lg">Description</label>
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full p-4 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter description"
            />
          </div>
  
          <div>
            <label className="block text-gray-700 mb-2 text-lg">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              className="w-full p-4 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
  
          <div>
            <label className="block text-gray-700 mb-2 text-lg">Priority</label>
            <select
              value={priority}
              onChange={e => setPriority(e.target.value)}
              className="w-full p-4 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>
          </div>
        </div>
  
        <div className="mt-6 flex justify-end">
          <button
            onClick={submitTask}
            className="bg-indigo-500 text-white text-lg px-6 py-3 rounded-md hover:bg-indigo-600 transition"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  );
  
}  
export default TaskForm;
