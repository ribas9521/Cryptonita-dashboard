import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'
import { loadState, saveState, removeState } from "../common/helpers/localStorage";

export function login(values) {
  return dispatch => {
    const identity = loadState('identity')
    if (identity) {
      axios.get(`${consts.API_URL}/username/session-information`, { headers: { session: identity.username.accessToken } })
        .then(resp => {
          if (resp.data.status === "ok") {
            dispatch([{ type: 'USER_IDENTITY_FETCHED', payload: identity },
            { type: 'USER_AUTHENTICATED', payload: true }
            ])
          }
        })
        .catch(e => {
          console.log(e.response.data.message)
        })
    }
    if (values) {
      axios.post(`${consts.API_URL}/username/auth`, values)
        .then(resp => {
          dispatch([
            [saveState('identity', resp.data.result),
            { type: 'USER_IDENTITY_FETCHED', payload: resp.data.result },
            { type: 'USER_AUTHENTICATED', payload: true }           
            ]
          ])
        })
        .catch(e => {
          console.log(e.response.data.message)
        })
    }
  }
}
export function logout() {
  return dispatch => {
    dispatch([removeState('identity'),
      { type: 'USER_AUTHENTICATED', payload: false }])
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




