import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, setFilter } from '../features/tasks/tasksSlice';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { Button, Select, MenuItem, Container, Typography } from '@mui/material';

const TaskDashboard = () => {
  const [showForm,setShowForm] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.tasks.filter);

  const handleAddTask = (task) => {
    dispatch(addTask(task));
    setShowForm(false);
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Task Management Dashboard</Typography>
      <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
        Add Task
      </Button>
      <Select value={filter} onChange={handleFilterChange}>
        <MenuItem value="all">All Tasks</MenuItem>
        <MenuItem value="completed">Completed Tasks</MenuItem>
        <MenuItem value="pending">Pending Tasks</MenuItem>
        <MenuItem value="overdue">Overdue Tasks</MenuItem>
      </Select>
      {showForm && <TaskForm onSubmit={handleAddTask} />}
      <TaskList />
    </Container>
  );
};

export default TaskDashboard;