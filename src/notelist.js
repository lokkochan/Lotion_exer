
function Notelist({notes, addClick, activeNote, setActiveNote}) {
    const sorted=notes.sort((a,b)=>b.notetime-a.notetime)

    return (
        <>
            <div id="notelist">
                <div id="notehead">
                    <h3>Notes</h3>
                    <button id="add_note" onClick={addClick}>+</button>
                </div>
                <div id="all_notes">
                    {sorted.map((note) => (
                        <div className={`written_notes ${note.id===activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                            <div className="written_note">
                                <h4>{note.title}</h4>
                                <small>{note.notetime}</small>
                                <p>{note.body.substr(0,50) + "..."}</p>
                            </div>
                        </div> 
                    ))}

                </div>
            </div>
        </>
    );
}
export default Notelist;
