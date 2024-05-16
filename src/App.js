import './App.scss';
import Addtask from './components/AddTask';
import AllTodos from './components/AllTodos';
import TodoContextProvider from './components/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <Addtask />
      <AllTodos />
    </TodoContextProvider>
  );
}

export default App;
