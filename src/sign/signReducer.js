const INITIAL_STATE = {
    userCreated: false,
    emailVerified: false,
    userAuthenticated: false,
    identity: null
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_CREATED':            
            return { ...state, userCreated: true }            
        case 'EMAIL_VERIFIED':           
            return { ...state, emailVerified: true }
        case 'USER_AUTHENTICATED':           
            return { ...state, userAuthenticated: action.payload }
        case 'USER_IDENTITY_FETCHED':           
            return { ...state, identity: action.payload }
        default:
            return state
    }
}