import { useNavigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';

function Main_read({activeNote, confirmDelete}) {
    if (!activeNote) {
        return (
            <div id="Blank">No note selected</div>
        )
    }
    let title = activeNote.title;
    let notetime = activeNote.notetime;
    let id= activeNote.id;
    
    return(
        <>
            <div id="note">
                <div id="edit">
                    <div id="edit_top">
                        <div id="date-title">
                            <div>
                                <h3>{title}</h3>
                                <small>{notetime}</small>
                            </div>
                        </div>
                        <div id="buttons">
                            <EditButton />
                            <DeleteButton confirmDelete={confirmDelete} id={id} />
                        </div>
                    </div>
                    <div id="note_content">
                        <div dangerouslySetInnerHTML={{ __html: activeNote.body }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_read;

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
        confirmDelete(id);
        navigate(-1);
    };

    return (
        <button id="Delete" onClick={()=>handleDeleteClick(confirmDelete,id)}>Delete</button>
    );
}

function EditButton() {
    const navigate = useNavigate();
  
    const handleEditClick = () => {
      navigate("./edit");
    };
  
    return (
      <button id="edit" onClick={handleEditClick}>edit</button>
    );
  }