import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Card from "./card";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
//import { FaHeroku } from "react-icons/fa";
//import { FaNode } from "react-icons/fa";

import { Container, Row, Col } from "react-bootstrap";

class Cards extends Component {
  render() {
    return (
      <Container id="cardLayout">
        <Row className="cardRow">
          <Col id="colStyle" md="auto">
            <Card
              favi={<FaReact />}
              title="React"
              cardContent="I have found React to be similar to php in a way that makes development quick, scalable and manageable. It truly showcases the well known DRY saying used amongst programmers. Reacts robust library along with available packages, have proven to be very powerful and user friendly. "
            />
          </Col>
          <Col sm="auto" md="auto">
            <Card
              favi={<FaSass />}
              title="Sass/CSS"
              cardContent="CSS alone has always seemed very repetitive to me, yet the solution of using constants seemed so obvious. It wasn't until I set aside some time to learn Sass and how a styling preproccesser could benefit me so much in my development time."
            />
          </Col>
          <Col sm="auto" md="auto">
            <Card
              favi={<FaBootstrap />}
              title="Bootstrap"
              cardContent="Bootstrap is easily the number one go to framework for quick and easy styling. Becoming a pro at bootstrap takes practice but it is the most versatile and intuitive setup out there. Using Bootstrap along side custom styling files, development is seemless."
            />
          </Col>

          <Col sm="auto" md="auto">
            <Card
              favi={<FaNpm />}
              title="Node.js"
              cardContent="Node Package Manager has become one of my favorite tools to use. It makes importing any package an easy one-liner and the community is always creating and improving packages to be used. "
            />
          </Col>
          <Col sm="auto" md="auto">
            <Card
              favi={<FaJsSquare />}
              title="JavaScript"
              cardContent="The seemless integration between JavaScript and React has made an impact on learning both. React encourages implementation of the most recent ES6 improvements like functions and React hooks"
            />
          </Col>
          <Col sm="auto" md="auto">
            <Card
              favi={<FaGithub />}
              title="Github"
              cardContent="Using Github not only to save Scripts but to deploy to testing servers has proved to be an invaluable tool within development."
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
