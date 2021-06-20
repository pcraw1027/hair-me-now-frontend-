
let initialState = {userId: 0, stylistId: 0, customerId: 0}


let rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "loggedIn":
            return {
                ...state, userId: action.payload
            }
        case "stylist":
            return {
                ...state, stylistId: action.payload
            }
        case "customer":
            return {
                ...state, customerId: action.payload
            }
        default:
            return state
    }
        
    
}

export default rootReducer