import { Form,FormControl, InputGroup } from "react-bootstrap";
import {useContext, useRef} from "react"
import { EmployeeContext } from "./Home";

export default function SearchBar(){
    const searchinput= useRef('');
    const{ doSearch, data, employees} = useContext(EmployeeContext);
    
    return(
        <Form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="search">Search</InputGroup.Text>
                <FormControl placeholder="Search by name or location" 
                ref={searchinput} 
                onChange={()=> doSearch(searchinput.current.value) }>

                </FormControl>
            </InputGroup>
            <p>Showing {data.length } of { employees.length} records</p>
        </Form>
    )

}