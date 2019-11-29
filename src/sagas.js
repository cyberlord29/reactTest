import { all } from 'redux-saga/effects'
import company from './sagas/company-sagas'

function* saga () {
  yield all([
     ...company,
  ])
}

export default saga
