import React, { useState } from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NotesContext";
export default function AddNote(props) {
    //We have to import the Notecontext part so that we can use it
    const context=useContext(NoteContext)
    //we are destructuring the notes and the setnotes from the context part
    const {addnote}=context
    const {showalert}=props
    //note is the initial blank value which does not contain anything and setnote is used ti change the value of the note
    const [note,setnote]=useState({title:" ",description:" ",tag:" "})
    const handleonclick=(e)=>{
        e.preventDefault();
        addnote(note.title,note.description,note.tag);
        setnote({title:"",description:"",tag:" "})
        // showalert("Your Note has been successfully added","success")
        alert("Your note has been successfully added")
    }
    const handleonchange=(e)=>{
        //setnote is a function which is used to update the value of note
        //here e is a event which is fired when we write anything in the input part 
        //e.target.name pertains to the part "name" attribute present in the input tag
        //e.target.value contains the value which which are wriring in the input part
        //hence we are able to update the value of the note as we are are making chnage sin the inpt part
        setnote({...note,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div>
      <div className="container my-3">
        <h2>Add a note</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
           Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleonchange}
            value={note.title}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
          Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleonchange}
            value={note.description}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
          Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={handleonchange}
            value={note.tag}
            required
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea> */}
          <button disabled={note.title.length<5 || note.description.length<5} type="button" className="btn btn-primary my-3" onClick={handleonclick}>Add a note</button>
        </div>
      </div>
    </>
  );
}
