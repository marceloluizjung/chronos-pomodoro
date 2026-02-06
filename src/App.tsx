import { MessagesContainer } from './components/MessagesContainer';
import { AuthContextProvider } from './contexts/AuthContext/AuthContextProvider';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MainRouter } from './routers/MainRouter';
import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <AuthContextProvider>
      <TaskContextProvider>
        <MessagesContainer>
          <MainRouter />
        </MessagesContainer>
      </TaskContextProvider>
    </AuthContextProvider>
  );
}

export default App
