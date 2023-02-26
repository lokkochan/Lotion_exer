import {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import Main from './main.js';
import Notelist from './notelist.js';
import uuid from 'react-uuid';


function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes)||[]);
  const [activeNote, setActiveNote] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  
  const currentActiveNote = notes.find((note) => note.id === activeNote);

  const addClick=()=> {
    const newNote = {
        id: uuid(),
        title: "Untitled",
        body: "",
        notetime: formatDate(Date.now()),
    };
    setActiveNote(newNote.id);
    setNotes([newNote, ...notes]);
  }

  const confirmDelete = (noteId) => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
        DeleteNote(noteId);
    }
}
  const DeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !==id))
  };

  const editNote = (new_node) => {
    const updated = notes.map((note) => {
        if (note.id === activeNote) {
            return new_node;
        }
        return note;
    }
    );
    setNotes(updated);
  };


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
      <Notelist notes={notes} addClick={addClick} activeNote={activeNote} setActiveNote={setActiveNote}/>    
      <Main activeNote={currentActiveNote} confirmDelete={confirmDelete} editNote={editNote}/>
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

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const formatDate = (when) => {
  const formatted = new Date(when).toLocaleString("en-US", options);
  if (formatted === "Invalid Date") {
      return "";
  }
  return formatted;
};

