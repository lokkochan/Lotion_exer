import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Main from './main.js';
import Sidebar from './sidebar.js';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState([]);

  const addClick=()=> {
    const newNote = {
        id: uuid(),
        title: "Untitled",
        body: "",
        lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
}

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
      <Sidebar notes={notes} addClick={addClick}/>    
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


