import * as ActionTypes from './action-types';
import axios from "axios";
const API_URL = process.env.REACT_APP_EMPLOYEE_API_URL;

export function loadEmployees(){
    return async (dispatch)=>{
        try{
            let result = await axios.get(API_URL);
            dispatch({
                type:ActionTypes.GET_EMPLOYEES,
                payload: result.data
            })
            return Promise.resolve(result.data);
        }catch(ex){
            return Promise.reject(ex)
        }
    }
    // return{
    //     type:ActionTypes.GET_EMPLOYEES,
    //     payload: employees                     //payload can be single value or array
    //}
}

export function addEmployee(employee){
    return async(dispatch)=>{
        try{    
            let result = await axios.post(API_URL,employee); //adding to DB  but not to inmemory state
            dispatch({
                type:ActionTypes.ADD_EMPLOYEE,
                payload: employee
            })
        }catch(err){
            return Promise.reject(err)
        }
        
    } 
}

export function deleteEmployee(locId,eCode){
    return async (dispatch)=>{
        {
            try{
                let url =`${API_URL}/location/${locId}/empcode/${eCode}`;
                let result = await axios.delete(url);
                dispatch({
                    type:ActionTypes.DELETE_EMPLOYEE,
                    payload: { locationId:locId, empCode:eCode}                         //passed object(key,value) not array
                })
                return Promise.resolve(result.data);
            }catch(err){
                return Promise.reject(err);
            }
        }
        
    }
}

export function getEmployee(locId,eCode){
    return async(dispatch)=>{
        try{
            
            let url =`${API_URL}/location/${locId}/empcode/${eCode}`;
            let result = await axios.get(url);
            console.log(result)
            dispatch({
                type:ActionTypes.GET_EMPLOYEE,
                payload: result.data
            })
            return Promise.resolve(result.data)
        }catch(ex){
            return Promise.reject(ex);
        }
    }
}