let initialState = { 
    appointmentData: []
    }

let appointmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case "appointmentDataIn":
            return {
                ...state, appointmentData: action.payload
            }
        case "appointmentDelete":
            return {
                ...state, appointmentData: action.payload
            }
        case "appointmentConfirm":
            return {
                ...state, appointmentData: action.payload 
            }
        default:
            return state
        }
}

export default appointmentReducer