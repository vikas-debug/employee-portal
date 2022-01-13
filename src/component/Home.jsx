import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getEmployee } from "../services/employee-services";
import EmployeeList from './EmployeeList'
import SearchBar from "./SearchBar";
import { connect } from "react-redux";

export const EmployeeContext = React.createContext();


class Home extends Component {
    constructor(props) {

        super(props);

        this.state = {
            employees: props.employees,
            filteredResult: props.employees
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    //lifecycle method which is called automatically after constructor or when props changed
    static getDerivedStateFromProps(newProps, state) {
        if (newProps.employees.length != state.employees.length) {
            console.log("Props changed", newProps)
            return {
                employees: newProps.employees,
                filteredResult: newProps.employees
            }
        }
        return null;
    }

    async componentDidMount() {

        // let employees = await getEmployee().catch(err=> console.log("Error in loading employee data")); 
        // console.log(employees)
        // this.setState({employees,filteredResult: employees}); //equivalent to {employees:employees}
    }

    handleSearch(searchText) {
        //do search text and update state
        if (searchText && searchText.length > 0) {
            searchText = searchText.toUpperCase();
            let filteredResult = this.state.employees.filter((item) => item.Name.toUpperCase().indexOf(searchText) >= 0
                || item.LocationID.toUpperCase().indexOf(searchText) >= 0);

            this.setState({ filteredResult })


        }
        else {
            this.setState({ filteredResult: this.state.employees })
        }
        console.log(searchText);
    }

    render() {
        console.log(this.state)
        return <EmployeeContext.Provider value={{ employees: this.state.employees, data: this.state.filteredResult, doSearch: this.handleSearch }}>
            <Container>
                <Row>
                    <Col>
                        <h2>Home</h2>
                        <SearchBar />
                        <EmployeeList />
                    </Col>
                </Row>
            </Container>
        </EmployeeContext.Provider>

    }
}

//Map reduxstore values to component properties i.e. props
function mapStateToProps(state) {
    return {
        //homecomponentPropertyName: statevalue               syntax
        employees: state.employeeState.employees
    }
}

//function mapDispatchToProps(dispatch){

//}

export default connect(mapStateToProps)(Home);

