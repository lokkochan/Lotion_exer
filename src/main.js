import { Link } from "react-router-dom";

function Main({activeNote, confirmDelete,editNote}) {
    const editingNote = (title,body,notetime) => {
        editNote({
            ...activeNote,
            ["title"]:title,
            ["body"]:body,
            ["notetime"]:notetime,
        });
    }    

    if (!activeNote) {
        return (
            <div id="Blank">No note selected</div>
        )

    }
    let title = activeNote.title;
    let body = activeNote.body;
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
                            <button id="Save" onClick={()=>editingNote(title,body,notetime)}>Save</button>
                            <button id="Delete" onClick={() => confirmDelete(activeNote.id)}>Delete</button>
                        </div>
                    </div>
                    <textarea id="note_content" placeholder="Your note here" defaultValue={body} onChange={(e)=>(body=e.target.value)}></textarea>
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
