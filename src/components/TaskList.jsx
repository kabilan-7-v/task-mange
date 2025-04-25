import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FaCheckCircle,
  FaTrash,
  FaCalendarAlt,
  FaClock,
  FaFlag,
  FaTasks,
  FaClipboardList,
} from 'react-icons/fa';

const TaskList = ({ refreshFlag, refresh }) => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from API on component mount or when refreshFlag changes
  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks').then(res => setTasks(res.data));
  }, [refreshFlag]);

  // Mark task as complete
  const markComplete = async (id) => {
    try {
      console.log('Sending request to mark task complete:', id);
      await axios.put(`http://localhost:5000/api/tasks/${id}`, { status: 'complete' });
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task._id === id ? { ...task, status: 'complete' } : task
        )
      );
      refresh();
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
      refresh();
    } catch (err) {
      console.error('Failed to delete task:', err);
    }
  };

  return (
    <div>
      

      <ul className="space-y-4 p-4">
        {tasks.map(task => (
          <li
            key={task._id}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="space-y-3 text-gray-800">
                <h3 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
                  <FaTasks className="text-indigo-500" />
                  {task.title}
                </h3>

                <p className="flex items-center gap-2">
                  <FaClipboardList className="text-gray-500" />
                  <span className="font-medium text-gray-600">Description:</span> {task.description}
                </p>

                <p className="flex items-center gap-2">
                  <FaCheckCircle className={`${
                    task.status === 'complete' ? 'text-green-600' : 'text-yellow-500'
                  }`} />
                  <span className="font-medium text-gray-600">Status:</span>
                  <span className={`font-semibold ${task.status === 'complete' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {task.status.toUpperCase()}
                  </span>
                </p>

                {task.expectedFinishTime && (
                  <p className="flex items-center gap-2">
                    <FaClock className="text-purple-500" />
                    <span className="font-medium text-gray-600">Expected Finish Time:</span>
                    {task.expectedFinishTime}
                  </p>
                )}

                {task.priority && (
                  <p className="flex items-center gap-2">
                    <FaFlag
                      className={`${
                        task.priority === 'High'
                          ? 'text-red-500'
                          : task.priority === 'Medium'
                          ? 'text-yellow-500'
                          : 'text-green-500'
                      }`}
                    />
                    <span className="font-medium text-gray-600">Priority:</span>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        task.priority === 'High'
                          ? 'bg-red-100 text-red-700'
                          : task.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {task.priority}
                    </span>
                  </p>
                )}
              </div>

              <div className="flex gap-2 mt-3 md:mt-0">
                {task.status !== 'complete' && (
                  <button
                    onClick={() => markComplete(task._id)}
                    className="px-4 py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600 transition flex items-center gap-2"
                  >
                    <FaCheckCircle />
                    Complete
                  </button>
                )}
                <button
                  onClick={() => deleteTask(task._id)}
                  className="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition flex items-center gap-2"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
