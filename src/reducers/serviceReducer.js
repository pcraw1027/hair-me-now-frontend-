let initialState = {  
    serviceData: []
    }

let serviceReducer = (state = initialState, action) => {
    switch(action.type) {
        case "serviceDataIn":
            return {
                ...state, serviceData: action.payload
            }    
        default:
            return state
    }
        
}

export default serviceReducer