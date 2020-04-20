import * as types from './../constants/ActionTyper';

export const listAll = () => {
    return {
        type: types.LIST__ALL
    }
} 

export const addTask = (tasks) => {
    return {
        type: types.ADD__TASKS,
        tasks
    }
} 

export const openForm = () => {
    return {
        type: types.OPEN__FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE__FORM
    }
}