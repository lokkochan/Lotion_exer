import ReactQuill from "react-quill";
import { Link ,useNavigate} from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

function Main({activeNote, confirmDelete,editNote}) {
    const [body, setBody] = useState(activeNote.body);
    const [title, setTitle] = useState(activeNote.title);
    const [notetime, setNotetime] = useState(activeNote.notetime);
    if (!activeNote) {
        return (
            <div id="Blank">No note selected</div>
        )
    }

    let prevtitle = activeNote.title;
    let prevnotetime = activeNote.notetime;
    let prevBody = activeNote.body;

    return(
        <>
            <div id="note">
                <div id="edit">
                    <div id="edit_top">
                        <div id="date-title">
                            <input type="text" id="note_title" defaultValue={prevtitle} onChange={(e)=>setTitle(e.target.value)} autoFocus />
                            <input type="datetime-local" defaultValue={prevnotetime} onChange={(e)=>setNotetime(formatDate(e.target.value))} />
                        </div>
                        <div id="buttons">
                            <SaveButton editNote={editNote} activeNote={activeNote} title={title} notetime={notetime} body={body}/>
                            <button id="Delete" onClick={() => confirmDelete(activeNote.id)}>Delete</button>
                        </div>
                    </div>
                    <ReactQuill id="note_content" placeholder="Your note here" defaultValue={prevBody} onChange={setBody} />
                </div>
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

function SaveButton({editNote, activeNote, title,notetime,body}) {
    const navigate = useNavigate();
    
    const editingNote = (editNote, activeNote ,title, notetime, body) => {
        //let new_value = body.replace(/(<([^>]+)>)/gi, "");  
        const new_value = body.replace(/<\/?[^>]+(>|$)/g, "");
        editNote({
            ...activeNote,
            ["title"]:title,
            ["body"]:new_value,
            ["notetime"]:notetime,
        });
        console.log(new_value);
    }    
    const handleEditClick = (editNote, activeNote, title, notetime,body) => {
        editingNote(editNote, activeNote,title,notetime,body);
        navigate(-1);
    };
  
    return (
      <button id="save" onClick={()=>handleEditClick(editNote, activeNote, title, notetime, body)}>Save</button>
    );
  }