import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import { Container, Nav, Navbar } from 'react-bootstrap';
import EmployeeDetail from './component/EmployeeDetail';
import EmployeeForm from './component/EmployeeForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadEmployees } from './actions/action-creators';

//amplify packages
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsEXports from './aws-exports';
Amplify.configure(awsEXports);

function App({ loadEmployees }) {
  loadEmployees();

  return (
    <Authenticator   loginMechanisms={['username']}>
      {({ signOut, user }) => (
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">{process.env.REACT_APP_APPLICATION_NAME}</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link onClick={signOut}>Signout</Nav.Link>
                <Nav.Link href="#">Welcome {user.username}</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div id="pagecontainer">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/employees/loc/:locId/ecode/:ecode" element={<EmployeeDetail />}></Route>
              <Route exact path="/employees/create" element={<EmployeeForm />}></Route>
            </Routes>
          </div>
        </Router>
      )}
    </Authenticator>
  );
}
function mapDispathToProps(dispatch) {
  let actionMap = {
    loadEmployees
  }
  return bindActionCreators(actionMap, dispatch)
}
export default connect(null, mapDispathToProps)(App);
