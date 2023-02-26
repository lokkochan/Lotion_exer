function Main({activeNote, confirmDelete,editNote}) {
    const editingNote = (id, value) => {
        editNote({
            ...activeNote,
            [id]: value,
        });
    }

    if (!activeNote) {
        return (
            <div id="Blank">No note selected</div>
        )

    }

    return(
        <>
            <div id="note">
                <div id="edit">
                    <div id="edit_top">
                        <div id="date-title">
                            <input type="text" id="note_title" defaultValue={activeNote.title} onChange={(e)=>editingNote("title", e.target.value)} autoFocus />
                            <input type="datetime-local" value={activeNote.notetime} onChange={(e)=>editingNote("notetime", formatDate(e.target.value))} />
                        </div>
                        <div id="buttons">
                            <button id="Save" >Save</button>
                            <button id="Delete" onClick={() => confirmDelete(activeNote.id)}>Delete</button>
                        </div>
                    </div>
                    <textarea id="note_content" placeholder="Your note here" value={activeNote.body} onChange={(e)=>editingNote("body", e.target.value)}></textarea>
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
