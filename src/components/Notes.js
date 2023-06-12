import React, { useEffect, useRef ,useState} from "react";
import NoteContext from "../context/notes/NotesContext";
import NotesItem from "./NotesItem";
import { useContext } from "react";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
export default function Notes(props) {
  let navigate=useNavigate();
  const {showalert}=props
  const context=useContext(NoteContext);
  const {editnote}=context
  //here we are going to make the use of note and setnote to update the note 
  //initially set the value of the note to be blank
  const [note,setnote]=useState({id:" ",etitle:" ",edescription:" ",etag:" "}) 
  const { mynote, getallnotes } = context;
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
    getallnotes();
    // eslint-disable-next-line
    }
    else {
      navigate('/login')
    }
  }, []);
  const ref = useRef(null);
  //we must be able to close the modal whenever someone clicks on updatenotes
  const refclose=useRef(null);
  //update note takes in a note as a note to be edited as a parameter and set the note variable which we have created above to be those values
  //so that whenever we click on the button it will show us the initial note which we can then edit
  const updatenote = (newnote) => {
    ref.current.click();
    setnote({id:newnote._id,etitle:newnote.title,edescription:newnote.description,etag:newnote.tag})
  };
const handleonclick=(e)=>{
    e.preventDefault();
    editnote(note.id,note.etitle,note.edescription,note.etag)
    // showalert("Your note has been sucessfully updated","success")
    alert("Your note has been successfully updated")
    refclose.current.click();
    
}
const handleonchange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
}
  return (
    <>
      <AddNote showalert={props.showalert}/>
      {/* We have imported modal component from bootstrap
      we write logic so that we can open the modal as per our convenience */}
      {/* We are making use of the ref variable to make changes as per the need */}
      {/* We can edited the button as per our convenience */}
       <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={handleonchange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={handleonchange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={handleonchange} />
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleonclick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
      <div className="row my-3">
        <h2>Your notes</h2>
        <div className="container">
        <h3>{mynote.length===0 && 'No notes to display'}</h3>
        </div>
        {mynote.map((mynote) => {
          return (
            <NotesItem
              updatenote={updatenote}
              mynote={mynote}
              key={mynote._id}
              showalert={props.showalert}
            />
          );
        })}
      </div>
    </>
  );
}
