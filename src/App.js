import { useState, createContext } from 'react';
import './App.css';
import Tasks from './components/Tasks';



export const Context = createContext(null);
export const ThemeContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');

  const [mode, setMode] = useState('light');


  const handleAddNewTask = () => {
    const items = [...tasks, name];
    setTasks(items);
  };

  const themeValue = {
    mode: mode, 
    setMode: setMode, 
  }

  return (

    <div className={mode}>
    <ThemeContext.Provider value={themeValue}>
      <Context.Provider value={tasks}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleAddNewTask}>create new task</button>
        <Tasks />
      </Context.Provider>
    </ThemeContext.Provider>
    </div>

  );
}

export default App;
