

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDashboard from './components/TaskDashboard';
import TaskList from './components/TaskList';
import AddEditTaskForm from './components/TaskForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tasks" element={<TaskDashboard />} />

        <Route path="/tasks/list" element={<TaskList />} />

        <Route path="/tasks/add" element={<AddEditTaskForm />} />
        <Route path="/tasks/edit/:id" element={<AddEditTaskForm />} />

        <Route path="/" element={<TaskDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
