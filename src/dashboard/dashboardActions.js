export function changeCheckedApps(app, checked){
    return (dispatch, getState)=>{
        let newState = {...getState().dashboard.apps}
        newState[app] = checked        
        dispatch({type: 'APP_CHECK_CHANGED', payload: newState })
    }
}