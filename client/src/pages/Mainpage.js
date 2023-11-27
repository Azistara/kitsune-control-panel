/*
    Mainpage.js
    The main part off the dashboard lives here.

    Author: Azistara
*/

import { Card, Row, Col } from "react-bootstrap";


import PlaceholderImage from "../img/placeholder.png";
import SimpleLineChart from "../includes/chartModules/simpleLineChart";

const Mainpage = () => {
  return (
    <div className="content">
      <h1>Home</h1>

      {/* First row status */}
      {/* PROTIP: Consider using Flexboxes here */}
      <div className="cardContainer">
        <Card>
          <Card.Body>
            <Card.Title>CPU</Card.Title>
            <SimpleLineChart />
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Memory</Card.Title>
            <SimpleLineChart />
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Disk</Card.Title>
            <SimpleLineChart />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Mainpage;
