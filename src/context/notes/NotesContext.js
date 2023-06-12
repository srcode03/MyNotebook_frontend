//we have to first import react and createContext from react
// imr is the short keyword for importing react
import {createContext} from 'react'
//now to create a context we make use createContext() function
const NoteContext=createContext();
//now we will export it so that it can be used by other components
export default NoteContext;

