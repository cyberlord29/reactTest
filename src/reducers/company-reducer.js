import {
    SET_PARAM, 
} from '../actions/company-actions'

const initialState = {
        name: "",
        description: "",
        testList: []
}

const company = (state = initialState, action) => {
    switch(action.type){
        case GET_TESTS_SUCCESS:
            return {
                ...state,
                testList:action.payload
            }
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
