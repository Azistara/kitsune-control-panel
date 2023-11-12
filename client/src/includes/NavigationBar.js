/* 
    NavigationBar.js
    Contains time, IP, and power controls.

    Author:Azistara
*/

import { useState } from "react";
import { Button, Container, Navbar, Modal, ButtonGroup, Alert, Form, Collapse, Card, Row, Col, ProgressBar } from "react-bootstrap";
import * as Io5 from "react-icons/io5";

import PowerDialog from "./PowerDialog";
import logo from "../img/kiyomi.png"

const NavigationBar = () => {
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [showPowerModal, setShowPowerModal] = useState(false);
    const [advancedPowerOptions, setAdvancedPowerOptions] = useState(false);
    const [powerOffModal, setPowerOffModal] = useState(false);
    const [powerAcion, setPowerAction] = useState('');

    const openPowerModal = () => setShowPowerModal(true);

    const closePowerModal = () => {
        setShowPowerModal(false);
        setAdvancedPowerOptions(false);
    };

    const openAboutModal = () => setShowAboutModal(true);
    const closeAboutModal = () => setShowAboutModal(false);

    const handlePowerAction = (action) => {
      console.log("Power option passed, open power off modal.")
      setPowerAction(action);
      openPowerOffModal();
    }

    const openPowerOffModal = () => {
      console.log("Power off modal called...");
      closePowerModal();
      setPowerOffModal(true);
    };

    const closePowerOffModal = () => {
      setPowerAction("");
      setPowerOffModal(false)
    };

    return (
      <div>
        <Navbar className="navigationBar" fixed="top">
          <Container>
            <div className="brandName">
              <i>
                Kitsune<b>ControlPanel</b>
              </i>
            </div>

            <Navbar.Collapse className="justify-content-end">
              <Form.Group id="navBarControls">
                <Row>
                  <Col xs="auto">
                    <Navbar.Text>
                      Server time: 11:19 AM | IP: <b>xxx.xxx.xxx.xxx</b>
                    </Navbar.Text>
                  </Col>

                  <Col>
                    {/* Power controls, and other settings stuff over here */}
                    <a onClick={openPowerModal} title="Power options">
                      <Io5.IoPowerSharp />
                    </a>
                  </Col>

                  <Col>
                    <a onClick={openAboutModal} title="About">
                      <Io5.IoHelpOutline />
                    </a>
                  </Col>
                </Row>
              </Form.Group>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* About Modal */}
        <Modal show={showAboutModal} onHide={closeAboutModal} size="md">
          <Modal.Body className="text-center">
            <img src={logo} width={420}></img>
            <h2>Kitsune Control Panel</h2>
            <i>Version 0.0.1</i>
            <br></br>
            <br></br>
            <p>Copyright © 2023 Azistara Developments, LLC.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={closeAboutModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* Power options modal */}
        <Modal show={showPowerModal} size="lg" centered>
          <Modal.Header>
            <Modal.Title>
              <Io5.IoPower /> Power Options
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Alert key="danger" variant="danger">
              <b>WARNING:</b> Powering off or restarting your server will cause
              service disruptions, especially during file transfers. Make sure
              that all connections and transfers are stopped prior to shutdown
              or restart.
            </Alert>

            <div className="text-center">
              <ButtonGroup
                size="lg"
                aria-label="powerOptions"
                className="text-center">
                <Button
                  variant="danger"
                  onClick={() => handlePowerAction("shutdown")}>
                  <Io5.IoPower /> Shutdown
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handlePowerAction("restart")}>
                  <Io5.IoReload /> Restart
                </Button>
              </ButtonGroup>
            </div>

            <Form.Check
              type="checkbox"
              label="Advanced Options"
              onClick={() => setAdvancedPowerOptions(!advancedPowerOptions)}
              aria-expanded={advancedPowerOptions}
            />

            {/* Advanced Power Options section */}
            <div style={{ margin: 0, padding: 0 }}>
              <Collapse in={advancedPowerOptions}>
                <Card>
                  <Card.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="controlInput1">
                        <Row>
                          <Col>
                            <Form.Label>Scheduled shutdown</Form.Label>
                            <Form.Control type="date" placeholder="" />
                          </Col>

                          <Col>
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time" placeholder="" />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="controlTextarea1">
                        <Form.Label>Reason for service disruption</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <Form.Check
                          type="checkbox"
                          label="Broadcast announcement whereever possible"
                          // onClick={}
                          // aria-expanded={}
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Collapse>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closePowerModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        {closePowerModal && <PowerDialog action={powerAcion} onHide={closePowerOffModal} />}
      </div>
    );
}
 
export default NavigationBar;