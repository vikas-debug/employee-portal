import { combineReducers } from "redux";
import employeeReducer from "./employee-reducer";

const rootReducer = combineReducers({
    employeeState: employeeReducer,
    // complaintState:complaintReducer,
    // orderState:orderReducer
})

export default rootReducer;