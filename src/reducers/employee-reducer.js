
import * as ActionTypes from '../actions/action-types';

const initialState={
    employees:[],
    employee:undefined
        // { LocationID:'CHE',Name:'Saket',Age:30,Department:'Finance',Designation:'Auditee',Location:'Chennai',EmpCode:'E0012'},
        // { LocationID:'HYD',Name:'Ram',Age:35,Department:'Aero',Designation:'Sr. Engineer',Location:'Hyderabad',EmpCode:'E0027'}
    
}
 
function employeeReducer(state=initialState, action){
    const { type,payload} =action;
    switch(type)
    {
        case ActionTypes.GET_EMPLOYEES:
            return {...state, employees: payload}  //...state will keep values as it is other than employees
        case ActionTypes.GET_EMPLOYEE:
            return {...state, employee: payload}
        case ActionTypes.ADD_EMPLOYEE:
            return {...state, employees: [...state.employees, payload]}
        case ActionTypes.DELETE_EMPLOYEE:
            let dItem = state.employees.find(item=>item.LocationID===payload.locationId && item.EmpCode === payload.empCode);
            return {...state, employees: state.employees.filter(item=>item!=dItem)}       //accept the deleted item & return other items
        default:
            return state;
    }
}

export default employeeReducer;
