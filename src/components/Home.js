import React from 'react'
import Notes from './Notes'
export default function Home(props) {
  // //We have to import the Notecontext part so that we can use it
  // const context=useContext(NoteContext)
  // //we are destructuring the notes and the setnotes from the context part
  // const {notes,setnotes}=context
  const {showalert}=props;
  return (
    
      // {/* <div className="container my-3">
      // <h2>Your notes</h2> */}

      // {/* syntax of .map() method is array.map((array)=>{ return (whatever u want from the each array element)}) */}
      // {/* {notes.map((notes)=>{
      //   return notes.title
      // })} */}
      // {/* {/* </div> */}
      // {/* Now we have created a seperate component for notes so we will render it over here */}
      <Notes showalert={showalert}/>
    
  )
}
