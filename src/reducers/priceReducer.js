let initialState = { 
    priceData: []
    }

let priceReducer = (state = initialState, action) => {
    switch(action.type) {
        case "priceDataIn":
            return {
                ...state, priceData: action.payload
            }
        case "priceAdd":
            return {
                ...state, priceData: [...state.priceData, action.payload]
            }
        case "priceDeactive":
            return {
                ...state, priceData: action.payload
            }
        case "priceDelete":
            return {
                ...state, priceData: action.payload
            }
        default:
            return state
        }
}

export default priceReducer