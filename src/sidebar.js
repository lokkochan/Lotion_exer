
function Sidebar({notes, addClick}) {
    return (
        <>
            <div id="notelist">
                <div id="notehead">
                    <h3>Notes</h3>
                    <button id="add_note" onClick={addClick}>+</button>
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
