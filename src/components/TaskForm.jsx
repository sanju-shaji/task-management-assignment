import  { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const TaskForm = ({ onSubmit, task = {} }) => {
  const [title,setTitle] = useState(task.title || '');
  const [description,setDescription] = useState(task.description || '');
  const [dueDate,setDueDate] = useState(task.dueDate || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: task.id || Date.now(), title, description, dueDate, completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Due Date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            {task.id ? 'Update Task' : 'Add Task'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskForm;