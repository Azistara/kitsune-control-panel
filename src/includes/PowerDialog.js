/* 
    PowerDialog.js
    Power off / shutdown dialog.

    Author:Azistara
*/

import { useState } from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import * as Io5 from "react-icons/io5";

const PowerDialog = ({ action, onClose }) => {
  const [showProgress, setShowProgress] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const closePowerOffModal = () => {
    console.log("Power off modal closed.");
    setShowModal(false);
  };

  const handlePowerAction = () => {
    if (action === "restart") {
      setShowProgress(true);

      setTimeout(() => {
        setShowProgress(false);
        setShowModal(false); // Close the dialog when the action is complete
        action = "";
      }, 30000);
    } else {
      setShowModal(false); // Close for other actions
      action = "";
    }
  };

  return (
    // Confirmation modal
    <Modal show={action !== ""} onHide={closePowerOffModal} size="lg" centered>
      <Modal.Header>
        {console.log("Power off modal active.")}
        <Modal.Title>
          <Io5.IoWarning /> {action === "restart" ? "Restart" : "Shutdown"} Server
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {showProgress && (
          <div>
            <p>
              The server is rebooting. Please wait for some time until the
              process is complete.
            </p>
            <ProgressBar now={10} />
          </div>
        )}

        {!showProgress && (
          <p>
            Are you sure you want to{" "}
            {action === "restart" ? "restart" : "shutdown"} the server?
          </p>
        )}
      </Modal.Body>

      {!showProgress && (
        <Modal.Footer>
          <Button variant="danger" onClick={handlePowerAction}>
            {action === "restart" ? "Restart" : "Shutdown"}
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default PowerDialog;
