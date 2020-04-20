import * as types from './../constants/ActionTyper';
import { v4 as uuidv4 } from 'uuid';

var data =JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : [];

var myReducer = (state=initialState,action) => {
    switch (action.type) {

        case types.LIST__ALL:
            return state;

        case types.ADD__TASKS:
            var newTask = {
                id : uuidv4(),
                name: action.tasks.name,
                status: action.tasks.status === "true" ? true : false
            }
            state.push(newTask);
            localStorage.setItem("tasks",JSON.stringify(state));
            return [...state]; 
               
        default:
            return state;
    }
}

export default myReducer;