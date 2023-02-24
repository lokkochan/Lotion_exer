import {useState} from 'react';

function App() {
  const [notes, setNotes] =useState([]) ;
  const [note, setNote] = useState('');
  const [ishidden, setIsHidden] = useState(false);
  return (
  <>
    <header>
      <Show_note/>
      <div id="title">
        <h1>Lotion</h1>
        <h4>Like Notion, but worst</h4>
      </div>
    </header>
    <div id="content">
      <div id="notelist">
        <div id="notehead">
          <h3>Notes</h3>
          <Add_note/>
        </div>
      </div>
      <div id="note">
        note
      </div>
    </div>

  </>);
}

export default App;

function Show_note() {
  function show_Click() {
    let notelist = document.getElementById('notelist');
    notelist.classList.toggle("hidden");
  }
  return (
    <button id="show_all_notes" onClick={show_Click}>-</button>
  );
}

function Add_note() {
  function addClick() {
    console.log("add note");
  }
  return (
    <button id="add_note" onClick={addClick}>+</button>
  );
}