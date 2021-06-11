import React from 'react';
import { connect } from 'react-redux';
import {deleteNote} from '../redux/actions'
import './Note.css'
const Note = (props) => {
    var {name,index,isImportant,noteID} = props
    
    const deleteNote = (e) =>{
        props.deleteNote(e.target.name)
    }

    return ( 
        <div  className={isImportant? "note":"note red"}>
            <div className="notediv">
                <b className="index">{index}-</b>
                <p>{name}</p>
            </div>
            <button className="deleteButton" name={noteID} onClick={e => deleteNote(e)}>X</button>
        </div>
     );
}

const mapActionsToProps = ({
    deleteNote,
})
export default connect(null,mapActionsToProps)(Note)