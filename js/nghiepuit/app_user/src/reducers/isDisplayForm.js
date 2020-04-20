import * as types from './../constants/ActionTyper';

var initialState = true;

var myReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.OPEN__FORM:
            state = true;
            return !state
        case types.CLOSE__FORM:
            state = false;
            return state
        default:
            return state;
    }
}

export default myReducer;