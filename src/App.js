//Import Styles
import './App.css';
//Import Components
import List from './components/List';

function App() {
  return (
    <main>
    <div className="container-fluid">
    <h1>Birthday Reminder ... </h1>
    <List title="There are ... birthday remaining" />
    </div>
    </main>
  );
}

export default App;
