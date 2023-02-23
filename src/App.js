import {useState} from 'react';

function App() {
  const [notes, setNotes] =useState([]) ;
  const [note, setNote] = useState('');
  const [showAllNotes, setShowAllNotes] = useState(false);
  return (
  <>
    <header>
      <button id="show_all_notes">-</button>
      <div id="title">
        <h1>Lotion</h1>
        <h4>Like Notion, but worst</h4>
      </div>
    </header>
    <div id="content">
      <div id="notelist">
      </div>
      <div id="note">
      </div>
    </div>

  </>);
}

export default App;
