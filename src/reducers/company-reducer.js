import {
    SET_PARAM, 
} from '../actions/company-actions'

const initialState = {
        name: "",
        description: ""
}

const company = (state = initialState, action) => {
    switch(action.type){
        case SET_PARAM:
        return {
            ...state,
            [action.payload.id]: action.payload.value
            }
        default:
        return state
    }
}

export default company
