let initialState = { 
    customerId: 0,  
    customerData: []
    }

let customerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "customer":
            return {
                ...state, customerId: action.payload
            }
        case "customerDataIn":
            return {
                ...state, customerData: action.payload
            }
        default:
            return state
        }
}

export default customerReducer