import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

export function login(values) {
  return dispatch => {
    axios.post(`${consts.API_URL}/username/auth`, values)
      .then(resp => {
        dispatch([
          { type: 'USER_AUTHENTICATED', payload: true }
        ])
      })
      .catch(e => {
        console.log(e.response.data.message)
      })
  }
}
export function logout() {
  return dispatch => {
    dispatch({ type: 'USER_AUTHENTICATED', payload: false })
  }
}
export function signup(values) {
  return dispatch => {
    axios.post(`${consts.API_URL}/username/register`, values)
      .then(resp => {
        dispatch([
          { type: 'USER_CREATED', payload: resp.data }
        ])
      })
      .catch(e => {
        console.log(e.response.data.message)
      })
  }
}
export function confirmEmail(values) {
  return dispatch => {
    axios.post(`${consts.API_URL}/username/email-validation`, values)
      .then(resp => {
        dispatch({ type: 'EMAIL_VERIFIED', payload: resp.data })
      })
      .catch(e => {
        console.log(e.response.data.message)
      })
  }
}




