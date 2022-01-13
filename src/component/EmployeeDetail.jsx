import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Table } from "react-bootstrap";
import { getEmployee } from '../actions/action-creators';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

function EmployeeDetail({getEmployee,employee}) {

    const { locId, ecode } = useParams();
    //const [employee, setEmployee] = useState();

    useEffect(() => {

        async function fetchEmployee() {
            let result =  getEmployee(locId, ecode);
            //console.log('res',result)
            //setEmployee(result);
        }
        fetchEmployee();
    }, [locId, ecode]); //if locId or ecode is updated then only useEffect will execute

    //console.log(employee)
    return (<React.Fragment>
        {employee && createTable()}
    </React.Fragment>)

    function createTable() {
        //console.log(employee)
        return (<Container>
            <Row>
                <Col className="col-md-6 mx-auto">
                    <Table bordered striped hover>
                        <thead>
                            <tr>
                                <th colSpan="2"><h3>Employee Details</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Location</th>
                                <td>{employee.LocationID}</td>
                            </tr>
                            <tr>
                                <th>Emp. Code</th>
                                <td>{employee.EmpCode}</td>
                            </tr>
                            <tr>
                                <th>Designation</th>
                                <td>{employee.Designation}</td>
                            </tr>
                            <tr>
                                <th>Department</th>
                                <td>{employee.Department}</td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>{employee.Age}</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{employee.Name}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>)
    }
}

function mapStateToProps(state){
return{
    employee:state.employeeState.employee
}
}

function mapDispatchToProps(dispatch){
    let actionMap={
        getEmployee
    }
    return bindActionCreators(actionMap,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeDetail)