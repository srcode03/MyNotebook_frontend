import React, {useState} from 'react';
import NoteContext from './NotesContext'
const NoteState=(props)=>{
    let host="http://localhost:5000"
     const mynotes=[];
      //notes has the initial value of mynotes
      const [mynote,setmynote]=useState(mynotes)
      //GET ALL NOTES:
      const getallnotes=async()=>{
        const response=await fetch(`${host}/api/notes/fetchallnotes`,{
          method:"GET",
          headers:{
              'Content-Type':'application/json',
              'auth-token':localStorage.getItem("token")
          },
          
        })
        const json=await response.json()
        
        setmynote(json)
      }
      //Add a note
      //The function takes in title,description,tag as input
      const addnote=async(title,description,tag)=>{
       //API CALL
        //Logic to edit in client
        //we are making use of the fetch function
        //Just like we used to place the headers in the Thunderclient similarily we are setting up response in the similar way
        const response=await fetch(`${host}/api/notes/addnote`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem("token")
            },
            body:JSON.stringify({title,description,tag})
        })
        const note=await response.json();
          //.concat() method updates an array and returns it
          //the note which is being created using the input entered by the user is being to the array
        setmynote(mynote.concat(note))
      }
      //Edit note
      const editnote=async(id,title,description,tag)=>{
        //API CALL
        //Logic to edit in client
        //we are making use of the fetch function
        //Just like we used to place the headers in the Thunderclient similarily we are setting up response in the similar way
        const response=await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem("token")
            },
            body:JSON.stringify({title,description,tag})
        })
        const note=await response.json();
        

        //we will be making use of for loop for acessing each element of the array
        const newnote=[];
        for (let index = 0; index < mynote.length; index++)
        {
           const element=mynote[index]
            if(mynote[index]._id===note._id)
            {
             const unote={_id:" ",user:"",title:"",description:"",tag:"",__v:0}
             unote.title=note.title;
             unote.description=note.description;
             unote.tag=note.tag;
             unote._id=note._id;
             unote.__v=note.__v;
             newnote.push(note);
            }
            else{
              newnote.push(element);
            }
        }
        setmynote(newnote);
        
      }

      //Delete note
      //deletenote takes in the id of the note to be deleted
      const deletenote=async(id)=>{
        const response=await fetch(`${host}/api/notes/deletenote/${id}`,{
          method:"DELETE",
          headers:{
              'Content-Type':'application/json',
              'auth-token':localStorage.getItem("token")
          }
      })
      
      
        //.filter() method is used for that element which has the id to be deleted
        //this is being stored in a new array of mewnote
        const newnote=mynote.filter((mynote)=>{return mynote._id!==id})
        //now newnote contains which contains the updated array
        //setmynote is used for updating the mynote
        setmynote(newnote)
       
      }
      
      
    return (
        <NoteContext.Provider value={{mynote,addnote,deletenote,getallnotes,editnote,}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState