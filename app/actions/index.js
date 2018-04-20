
let nextTodoId = 0

export const addTodo = ( text ) => ({
    type: 'ADD_TODO',
    id: nextTodoId++ ,
    text
})

export const deleteTodo = ( id ) => ({
    type: 'DELETE_TODO',
    id
})
 
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})
 
export const toggleTabBar = state => ({
    type: 'TOGGLE_TABBAR',
    state
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}