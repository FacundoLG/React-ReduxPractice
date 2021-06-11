import React from 'react'
import {connect} from 'react-redux'
import './Home.css'

import Input from './Input'
import Note from './Note'
const Home = ({todos}) => {
    return ( 
        <div className="Home">
            <div>
            {todos.map((todo,index) =>
                <Note key={index} noteID={todo.id} index={index+1} name={todo.name} isImportant={todo.important}/>  
            )}
            </div>
            <Input/>
        </div>
     );
}
const mapStateToProps = state =>{
    return{
        todos:state.todos
    }
}

export default connect( mapStateToProps, null )(Home)