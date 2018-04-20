import { combineReducers } from 'redux'
import todoReducers from './todoReducers'
import visibilityFilter from './visibilityFilter'
import TabBar from './tabBar'

const CombineReducers = combineReducers ({
    todoReducers , 
    visibilityFilter , 
    TabBar
})

export default CombineReducers