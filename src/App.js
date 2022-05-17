import './App.css';
import ToDoItemList from './components/ToDoItemList';

function App() {
const items = [
  {title: "Need Butter", isCompleted: true},
  {title: "Need Bread", isCompleted: true},
  {title: "Need Booze", isCompleted: false},
  {title: "Need Bananas", isCompleted: false},
  {title: "Need Berries", isCompleted: true},
]

  return (
    <div className="App">
      <header className="App-header">
        <ToDoItemList items={items} />
      </header>
    </div>
  );
}

export default App;
