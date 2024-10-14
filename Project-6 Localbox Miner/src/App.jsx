import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = () => {
    if (taskTitle && taskDate && taskDescription) {
      const newTask = {
        id: editTaskId || Date.now(),
        title: taskTitle,
        date: taskDate,
        description: taskDescription,
      };

      const updatedTasks = editTaskId
        ? tasks.map(task => (task.id === editTaskId ? newTask : task))
        : [...tasks, newTask];

      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setAlertMessage(editTaskId ? 'Task updated successfully!' : 'Task added successfully!');
      clearFields();
    } else {
      setAlertMessage('Please fill in all fields.');
    }

    setTimeout(() => setAlertMessage(''), 3000);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setAlertMessage('Task deleted successfully!');

    setTimeout(() => setAlertMessage(''), 3000);
  };

  const editTask = (task) => {
    setTaskTitle(task.title);
    setTaskDate(task.date);
    setTaskDescription(task.description);
    setEditTaskId(task.id);
  };

  const clearFields = () => {
    setTaskTitle('');
    setTaskDate('');
    setTaskDescription('');
    setEditTaskId(null);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">TODO App</h3>
      {alertMessage && <div className="alert alert-success text-center">{alertMessage}</div>}

      <div className="card todo-card mx-auto  ">
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="form-control"
              placeholder="Add New Task"
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="form-control"
              placeholder="Task Description"
            />
          </div>
          <button className="btn btn-success   text-center  w-100" onClick={addTask}>
            {editTaskId ? 'Update Task' : 'Add Task'}
          </button>

          <h5 className="mt-4">Tasks</h5>
          <div id="taskList">
            {tasks.map(task => (
              <div key={task.id} className="task-card p-3 mb-2">
                <h6>{task.title}</h6>
                <p>{task.date}</p>
                <p>{task.description}</p>
                <button className="btn btn-warning btn-sm me-2" onClick={() => editTask(task)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;