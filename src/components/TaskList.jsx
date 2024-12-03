// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, markTaskCompleted } from '../features/tasks/tasksSlice';
import TaskItem from './TaskItem';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => {
    const { tasks, filter } = state.tasks;
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      case 'overdue':
        return tasks.filter(task => !task.completed && new Date(task.dueDate) < new Date());
      default:
        return tasks;
    }
  });

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleMarkCompleted = (id) => {
    dispatch(markTaskCompleted(id));
  };

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onMarkCompleted={handleMarkCompleted}
        />
      ))}
    </div>
  );
};

export default TaskList;