/*
    Mainpage.js
    The main part off the dashboard lives here.

    Author: Azistara
*/

import { Card, Row, Col } from "react-bootstrap";

import PlaceholderImage from "../img/placeholder.png";

const Mainpage = () => {
  return (
    <div className="content">
      <h1>Home</h1>

      {/* First row status */}
      {/* PROTIP: Consider using Flexboxes here */}
      <div className="cardContainer">
        <Card>
          <Card.Header>
            <Card.Img variant="top" src={PlaceholderImage} />
          </Card.Header>

          <Card.Body>
            <Card.Title>Information</Card.Title>
            <Card.Text>
              Windows XP is a major release of the Windows NT operating system
              developed by Microsoft. It was the direct successor to both
              Windows 2000 for professional users and Windows Me for home users,
              and it was released to manufacturing on August 24, 2001, with
              retail sales beginning on October 25, 2001.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Mainpage;
