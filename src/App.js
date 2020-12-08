import React,{useState} from 'react';
//Import Styles
import './App.css';
//Import Components
import List from './components/List';
import {data} from './components/Data'

function App() {
  //Create state variable
  const [people,setPeople] = useState(data);
  //Clear all records function
  function clearAllRecs() {
    setPeople([]);
  }
  return (
    <main>
      <div className="container-fluid">
        <h1>{data.length} birthdays today...</h1>    
        <List people={data} />
        <button type='button' onClick={clearAllRecs}> <span>Clear All</span></button>
      </div>
    </main>
  );
}

export default App;
