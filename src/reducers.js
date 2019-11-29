import { combineReducers } from 'redux'

import company from './reducers/company-reducer'

export default combineReducers({
    company: company
  })