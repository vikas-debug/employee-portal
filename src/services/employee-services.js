import axios from "axios";

const API_URL = process.env.REACT_APP_EMPLOYEE_API_URL;

export async function getEmployee(){
    console.log(API_URL)
    return fetch(API_URL)
        .then(response => response.json());
}


export async function getEmployee1(locId,ecode){
     //http://localhost:5000/employees/location/MUM/empcode/EMP1
     //http://localhost:5000/employees/location/L1/empcode/E1

    let url = `${API_URL}/location/${locId}/empcode/${ecode}`;
    return fetch(url)
        .then(resp => resp.json());
}

export async function addEmployee(employee){
    return axios.post(API_URL, employee)
} 
