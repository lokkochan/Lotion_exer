import { useNavigate } from "react-router-dom";

function Notelist({notes, addClick, activeNote, setActiveNote}) {
    const sorted=notes.sort((a,b)=>b.notetime-a.notetime);
    if (sorted.length==0) {
        return (
            <div id="notelist">
                <div id="notehead">
                    <h3>Notes</h3>
                    <button id="add_note" class="Clickable" onClick={addClick}>+</button>
                </div>
                <div id="all_notes">
                    <div id="NOTESTHING">
                        <h4>No notes yet</h4>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <div id="notelist">
                <div id="notehead">
                    <h3>Notes</h3>
                    <AddNote addClick={addClick} />
                </div>
                <div id="all_notes">
                    {sorted.map((note) => (
                        <ShowNote note={note} activeNote={activeNote} setActiveNote={setActiveNote}/>
                    ))}

                </div>
            </div>
        </>
    );
}
export default Notelist;

function ShowNote({note, activeNote, setActiveNote}){
    const navigate = useNavigate();

    const clicked = (note,setActiveNote) => {
        setActiveNote(note.id);
        navigate("/notes/" + note.position);
    }
    let body = note.body.replace(/(<([^>]+)>)/gi, "");

    return (
        <div className={`written_notes ${note.id===activeNote && "active"}`} onClick={() => clicked(note, setActiveNote)}>
                <div className="written_note" id="NOTESTHING">
                    <h4>{note.title}</h4>
                    <small>{note.notetime}</small>
                    <p>{body.substr(0,50) + "..."}</p>
                </div>
        </div> 
    );
}

function AddNote({addClick}) {
    let navigate = useNavigate();
    const clicked = (addClick) => {
        addClick();
        navigate("/notes/1");
    }
    return (
        <button id="add_note" class="Clickable" onClick={()=>clicked(addClick)}>+</button>
        );
}
