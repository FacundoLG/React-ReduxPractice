import React, { useState } from 'react';
import {connect} from 'react-redux'
import {addNote} from '../redux/actions'
import './Input.css'
const Input = (props) => {
    var {todos} = props
    const [important,setImportant] = useState(false)
    const handleAddNote = () =>{
        var text = document.getElementById("noteInput").value
        var id = 1 + text.length 
    
       if(text.length > 1){
        props.addNote(
            {
            id: `${id}_&${text.charAt(text.length-2)}&${text.charAt(text.length-1)}-${Math.floor(Math.random()*(id*10))}`,
            name: text,
            important:important
            }
        
        )
        document.getElementById("noteInput").value = ""
            
        }
    }


    return ( 
    <div className="inputContainer">
        <input type="text" id="noteInput"/>
        <button type="button" className={important? "button important": "button"} onClick={() => setImportant(!important)}>Inportant</button>
        <button type="button" className="button" onClick={handleAddNote}>Add</button>
    </div> 
    );
}
const mapDispatchToProps = ({
    addNote,
})
const mapStateToProps = state => {
    return{
        todos:state.todos
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Input)