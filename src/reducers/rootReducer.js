import { combineReducers } from 'redux';
import stylistReducer from './stylistReducer';
import customerReducer from './customerReducer';
import appointmentReducer from './appointmentReducer';
import priceReducer from './priceReducer';
import serviceReducer from './serviceReducer';



let initialState = {userId: 0 
                    }

// console.log(initialState.stylistData)

let dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case "loggedIn":
            return {
                ...state, userId: action.payload
            }
        default:
            return state
    }
        
}

const rootReducer = combineReducers({dataReducer, stylistReducer, customerReducer, appointmentReducer, priceReducer, serviceReducer})
    

export default rootReducer