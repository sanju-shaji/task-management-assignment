// import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const TaskItem = ({ task, onDelete, onMarkCompleted }) => {
  return (
    <Card style={{ marginBottom: '10px' }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Typography variant="caption">Due: {new Date(task.dueDate).toLocaleDateString()}</Typography>
        <Button onClick={() => onMarkCompleted(task.id)}>
          {task.completed ? 'Mark Pending' : 'Mark Completed'}
        </Button>
        <Button onClick={() => onDelete(task.id)} color="secondary">
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskItem;