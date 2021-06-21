
let initialState = {userId: 0, stylistId: 0, customerId: 0, priceData: [], appointmentData: [], customerData: [], serviceData: [], stylistData: []}


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
        case "customerDataIn":
            return {
                ...state, customerData: action.payload
            }
        case "stylistDataIn":
            return {
                ...state, stylistData: action.payload
            }
        case "appointmentDataIn":
            return {
                ...state, appointmentData: action.payload
            }
        case "priceDataIn":
            return {
                ...state, priceData: action.payload
            }
        case "priceAdd":
            return {
                ...state, priceData: [...state.priceData, action.payload]
            }
        case "serviceDataIn":
            return {
                ...state, serviceData: action.payload
            }
        default:
            return state
    }
        
    
}

export default rootReducer