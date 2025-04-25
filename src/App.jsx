import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddTask from "./Pages/AddTask";

import TaskListPage from "./Pages/TaskListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/" element={<TaskListPage />} />

      </Routes>
    </Router>
  );
}

export default App;
