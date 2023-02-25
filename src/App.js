import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Main from './main.js';
import Sidebar from './sidebar.js';

function App() {
  return (
  <>
    <header>
      <Show_note/>
      <div id="title">
        <h1>Lotion</h1>
        <p>Like Notion, but worst</p>
      </div>
    </header>
    <main>
      <Sidebar/>
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


