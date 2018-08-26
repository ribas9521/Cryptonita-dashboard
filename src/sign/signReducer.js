const userKey = '_mymoney_user'
const INITIAL_STATE = {
    userCreated: false,
    emailVerified: false,
    userAuthenticated: false
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_CREATED':            
            return { ...state, userCreated: true }            
        case 'EMAIL_VERIFIED':           
            return { ...state, emailVerified: true }
        case 'USER_AUTHENTICATED':           
            return { ...state, userAuthenticated: action.payload }
        default:
            return state
    }
}