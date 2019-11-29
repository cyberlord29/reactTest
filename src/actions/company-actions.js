export const SET_PARAM = 'SET_PARAM'
export const CREATE_TEST = 'CREATE_TEST'
export const GET_TESTS = 'GET_TESTS'

export const setParams = ( payload ) => ({
    type: SET_PARAM,
    payload
})

export const createTest = (payload) => ({
    type:CREATE_TESTS,
    payload
})