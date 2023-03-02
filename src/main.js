import ReactQuill from "react-quill";
import { useNavigate} from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

function Main({activeNote, confirmDelete,editNote}) {
    const [body, setBody] = useState(activeNote ? activeNote.body : "");
    const [title, setTitle] = useState(activeNote ? activeNote.title : "");
    const [notetime, setNotetime] = useState(activeNote ? activeNote.notetime : "");
    if (!activeNote) {
        return (
            <div id="Blank">No note selected</div>
        )
    }

    let prevtitle = activeNote.title;
    let prevnotetime = activeNote.notetime;
    let prevBody = activeNote.body;
    let id= activeNote.id;
    const saveBody= (editor) => {
        setBody(editor);
    }
    //fix delete button
    return(
        <>
            <div id="note">
                <div id="edit">
                    <div id="edit_top">
                        <div id="date-title">
                            <input type="text" id="note_title" defaultValue={prevtitle} onChange={(e)=>setTitle(e.target.value)} autoFocus />
                            <input type="datetime-local" id="note_title" defaultValue={prevnotetime} onChange={(e)=>setNotetime(formatDate(e.target.value))} />
                        </div>
                        <div id="buttons">
                            <SaveButton editNote={editNote} activeNote={activeNote} title={title} notetime={notetime} body={body}/>
                            <DeleteButton confirmDelete={confirmDelete} id={id} />
                        </div>
                    </div>
                </div>
                <ReactQuill id="note_content" placeholder="Your note here" defaultValue={prevBody} onChange={saveBody} />
            </div>
        </>
    )
}

export default Main;

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
function DeleteButton({confirmDelete, id}){
    const navigate = useNavigate();

    const handleDeleteClick = (confirmDelete,id) => {
        let del=confirmDelete(id);
        if (del){
            navigate("../notes");  
        }
    };

    return (
        <button id="Delete" class="Clickable" onClick={()=>handleDeleteClick(confirmDelete,id)}>Delete</button>
    );
}

function SaveButton({editNote, activeNote, title,notetime,body}) {
    const navigate = useNavigate();
    
    const editingNote = (editNote, activeNote ,title, notetime, body) => {
        if (title === "") {
            title = "Untitled";
        }
        editNote({
            ...activeNote,
            ["title"]:title,
            ["body"]:body,
            ["notetime"]:notetime,
        });
    }    
    const handleEditClick = (editNote, activeNote, title, notetime,body) => {
        editingNote(editNote, activeNote,title,notetime,body);
        navigate(-1);
    };
  
    return (
      <button id="save" class="Clickable" onClick={()=>handleEditClick(editNote, activeNote, title, notetime, body)}>Save</button>
    );
  }