import "./includes/global.css"

import { BrowserRouter as Router, Routes, Route, Link, useResolvedPath } from "react-router-dom";
import { Nav, Tab, Row, Col } from "react-bootstrap";
import * as Io5 from "react-icons/io5";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import NavigationBar from "./includes/NavigationBar.js";

import Mainpage from "./pages/Mainpage.js";
import Page2 from "./pages/Page2.js"
import Page3 from "./pages/Page3.js"

function App() {
  // Returns the current path
  const currPath = window.location.pathname;

  return (
    <div className="App">
      <Router>
        <NavigationBar />

        {/* Tabbed navigation */}
        <Tab.Container>
          <Row className="mainContentWrapper">
            <Col sm={2} className="sidebarNavDummy"></Col>
            <Col sm={2} className="sidebarNav">
              <Nav variant="pills" className="flex-column">
                <Nav.Link as={Link} to="/" eventKey="first">
                  <Io5.IoHome/> Home
                </Nav.Link>

                <Nav.Link as={Link} to="pg2" eventKey="second">
                  <Io5.IoAdd/> Page 2
                </Nav.Link>

                <Nav.Link as={Link} to="/pg3" eventKey="third">
                  <Io5.IoAlarm/> Page 3
                </Nav.Link>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Routes>
                  <Route exact path="/" element={<Mainpage />} />
                  <Route exact path="pg2" element={<Page2 />} />
                  <Route exact path="pg3" element={<Page3 />} />
                </Routes>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Router>
    </div>
  );
}

export default App;
