import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";

function Main({activeNote, confirmDelete,editNote}) {
    const [value, setValue] = useState("");

    const editingNote = (title, notetime) => {
        let new_value= value.replace(/<[^>]+>/g, '');
        editNote({
            ...activeNote,
            ["title"]:title,
            ["body"]:new_value,
            ["notetime"]:notetime,
        });
        console.log(new_value);
    }    

    if (!activeNote) {
        return (
            <div id="Blank">No note selected</div>
        )

    }
    let title = activeNote.title;
    let notetime = activeNote.notetime;

    return(
        <>
            <div id="note">
                <div id="edit">
                    <div id="edit_top">
                        <div id="date-title">
                            <input type="text" id="note_title" defaultValue={title} onChange={(e)=>(title= e.target.value)} autoFocus />
                            <input type="datetime-local" defaultValue={notetime} onChange={(e)=>(notetime= formatDate(e.target.value))} />
                        </div>
                        <div id="buttons">
                            <button id="Save" onClick={()=>editingNote(title,notetime)}>Save</button>
                            <button id="Delete" onClick={() => confirmDelete(activeNote.id)}>Delete</button>
                        </div>
                    </div>
                    <ReactQuill id="note_content" placeholder="Your note here" value={value} onChange={setValue} />
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
