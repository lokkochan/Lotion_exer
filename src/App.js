import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Main from './main.js';
import Sidebar from './sidebar.js';

function App() {
  const [notes, setNotes] = useState([]);


  return (
  <>
    <header>
      <Show_note/>
      <div id="title">
        <h4>Lotion</h4>
        <p id="head-title">Like Notion, but worst</p>
      </div>
    </header>
    <main>
      <Sidebar notes={notes}/>    
      <Main/>
    </main>
  </>);
}

export default App;

function Show_note() {
  function show_Click() {
    let notelist = document.getElementById('notelist');
    notelist.classList.toggle("hidden");
  }
  return (
    <button id="show_all_notes" onClick={show_Click}>&#9776;</button>
  );
}


