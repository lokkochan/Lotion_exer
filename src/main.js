function Main() {
    return(
        <>
            <div id="note">
                <div id="edit">
                    <div id="edit_top">
                        <div id="date-title">
                            <input type="text" id="note_title" placeholder="Title" autoFocus defaultValue={"Untitled"} />
                            <input type="datetime-local" />
                        </div>
                        <div id="buttons">
                                <button id="Save">Save</button>
                                <button id="Delete">Delete</button>
                        </div>
                    </div>
                    <textarea id="note_content" placeholder="Your note here"></textarea>
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