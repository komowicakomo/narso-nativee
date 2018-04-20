const tabar = ( state = { open : true }  , action ) => {
    switch (action.type) {
        case "TOGGLE_TABBAR" : 
            return {
                ...state , 
                open : action.state
            }
        default: 
            return state 
    }
}

export default tabar