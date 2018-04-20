const todos  = ( state = []  , action ) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TODO" : 
            return [...state , 
                {
                    id : action.id , 
                    text : action.text , 
                    completed : false 
                }
            ]
        case "DELETE_TODO" : 
            return state.filter( todo => {
                console.log('actions' , todo.id , action.id)
                return todo.id != action.id  
            })
        case "TOGGLE_TODO" : 
            return state.map( todo => {
               return todo.id === action.id ? {...todo , completed : !todo.completed } : todo
            })
        default: 
            return state 
    }
}

export default todos