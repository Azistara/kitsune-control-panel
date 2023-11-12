import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const MyComponent = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModal1 = () => setShowModal1(true);
  const closeAndOpenModal2 = () => {
    setShowModal1(false);
    setShowModal2(true);
  };
  const closeModal2 = () => setShowModal2(false);

  return (
    <div>
      <Button variant="primary" onClick={openModal1}>
        Open Modal 1
      </Button>

      {/* Modal 1 */}
      <Modal show={showModal1} onHide={() => setShowModal1(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>Content for Modal 1</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeAndOpenModal2}>
            Close Modal 1 and Open Modal 2
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 2 */}
      <Modal show={showModal2} onHide={closeModal2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>Content for Modal 2</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal2}>
            Close Modal 2
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyComponent;
