import { useState } from 'react';
import { TaskContext } from './contexts/TaskContext';
import type { TaskStateModel } from './models/TaskStateModel';
import { Home } from './pages/Home';
import './styles/global.css';
import './styles/theme.css';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

function App() {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{ chave: "Testes" }}>
      <Home />
    </TaskContext.Provider>
  );
}

export default App
