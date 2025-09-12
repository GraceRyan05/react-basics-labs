import './App.css';
import Task from './components/Task';


function App() {
  return (
    <div className="App">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today"/>
    </div>
  );
}

export default App;