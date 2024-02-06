import './App.css';
import { Input } from './components/Input';
import { Task } from './components/Task';
import { useState } from 'react';

function App() {

const handleDelete = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);
};

const handleMark = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks[index].marked = !updatedTasks[index].marked;
  setTasks(updatedTasks);
};
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter' && taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, marked: false }]);
      setTaskText('');
    }
  };
  return (
    <div className="App">
      <div className='title-container'>
        <div className='title'>Administrador de tareas</div>
      </div>

      <div className='task-admin-container'>
        <Input
          value={taskText}
          onChange={handleInputChange}
          onKeyPress={handleEnterPress}
        />
        {tasks.map((task, index) => (
          <Task 
          key={index} 
          task={task}
          onDelete={handleDelete}
          onMark={handleMark}
          />
        ))}
      </div>
      

    </div>
  );
}

export default App;
