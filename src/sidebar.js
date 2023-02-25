function Sidebar({ notes }) {
    return (
        <>
            <div id="notelist">
                <div id="notehead">
                    <h3>Notes</h3>
                    <Add_note/>
                </div>
                <div id="all_notes">
                    {notes.map((note) => (
                        <div className="note">
                            <div className="note_title">
                                <h4>TITLE</h4>
                                <small>last modified</small>
                                <p>preview</p>
                            </div>
                        </div> 
                    ))}

                </div>
            </div>
        </>
    );
}
export default Sidebar;


function Add_note() {
    function addClick() {
      let notelist = document.getElementById('notelist');
      let new_note = document.createElement('div');
      new_note.innerHTML = "New Note";
      new_note.classList.add('note');
      notelist.appendChild(new_note);
      let note = document.getElementById('note');
      let remove = document.getElementById('remove');
      note.removeChild(remove);
      let new_note_content = document.createElement('input');
      new_note_content.setAttribute('type', 'text');
      new_note_content.setAttribute('id', 'note_content');
      note.appendChild(new_note_content);
    }
    return (
      <button id="add_note" onClick={addClick}>+</button>
    );
  }