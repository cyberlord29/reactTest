import { takeLatest, put, fork } from 'redux-saga/effects'
import {
    CREATE_TEST,
    GET_TESTS
} from '../actions/company-actions'

import axios from 'axios'


function * createTestFlow() {
    yield takeLatest(CREATE_TEST, createTest)
}


function * createTest( { payload } ) {
    const response = yield axios.post(`/test`,payload)
    if (response && response.data) {
        console.log(response.data)
        yield put({
            type: GET_TESTS,
            data: response.data
          })
    }
}

export default [
    fork(createTestFlow)
]