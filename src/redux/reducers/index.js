const reducer = (state,action) =>{
    switch (action.type) {
        case 'ADD_NOTE':
            console.log(action)
            return{
                ...state,
                todos: [...state.todos,action.payload]
            }
        case 'DELETE_NOTE':
            console.log(action.payload)
            return{
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state
    }
}

export default reducer