let initialState = { 
    stylistId: 0, 
    stylistData: {},
    isStylist: false}

let stylistReducer = (state = initialState, action) => {
    switch(action.type) {
        case "stylist":
            return {
                ...state, stylistId: action.payload
            }
        case "stylistDataIn":
            return {
                ...state, stylistData: action.payload
                    }
        case "isStylist":
            return {
                ...state, isStylist: action.payload
            } 
        default:
            return state
    }
        
}

export default stylistReducer