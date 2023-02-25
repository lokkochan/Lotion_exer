import uuid from 'react-uuid';

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

    }
    return (
      <button id="add_note" onClick={addClick}>+</button>
    );
  }