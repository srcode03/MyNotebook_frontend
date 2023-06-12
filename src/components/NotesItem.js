import React, { useContext } from "react";
import { FaEdit, FaCut } from "react-icons/fa";
import NoteContext from "../context/notes/NotesContext";
export default function NotesItem(props) {
  const {mynote,updatenote} = props;
  //context now contains all the props which are being passed to it in the context api
  const context=useContext(NoteContext)
  // we are taking out delete note from the context which is passsed to it
  const {showalert}=props
  const {deletenote}=context
  
  return (
    <div className="card col-md-3 my-3 mx-3">
      <div className="card-body">
        <div className="justify-content-center">
          <div className="row">
            <div className="col md-2 mx-2">
              <h5 className="card-title">{mynote.title}</h5>
            </div>
            <div className="col md-2  mx-2 ">
              <i onClick={()=>updatenote(mynote)}>
                <FaEdit />
              </i>
            </div>
            <div className="col md-2 mx-2">
              <i onClick={()=>{
                deletenote(mynote._id)
                // showalert("Your note has been sucessfully deleted","success")
                alert("Your note has been successfully deleted")
                }}>
                <FaCut />
              </i>
            </div>
          </div>
        </div>
        <p className="card-text">{mynote.description}</p>
        <h6>Tag:<span className="badge bg-success">{mynote.tag}</span></h6>
      </div>
    </div>
  );
}
