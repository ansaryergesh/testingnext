import {combineReducers} from 'redux'
import { dayReducer } from './dayReducer'
import {MoneyVal} from './moneyVal'
import {registration} from './registration'
import {regionsReducer} from './regions'
import {loading} from './loading'
import {messages} from './messages'
import {stepregistration} from './stepregistration'
import {createForms} from 'react-redux-form'
import {RegistrationStep1,RegistrationStep2} from './registrationStep1'
export default combineReducers ({
  dayVal: dayReducer,
  moneyVal: MoneyVal,
  message: messages,
  registrationValues: registration,
  stepregistration: stepregistration,
  regionsReducer: regionsReducer,
  loading: loading,
  ...createForms({registration: RegistrationStep1, codeConfirm: "", registration2: RegistrationStep2,
  registration3: "", oplata: "", feedback: ""})
})
