import * as React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends React.Component<{}, {}> {
  render() {
    return (
      <Grid>
        <Jumbotron style={{ position: "relative" }}>
          <a href="https://github.com/snerks/react-bootstrap-ts-website/">
            <img
              style={{ position: "absolute", top: 0, right: 0, border: 0 }}
              src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
              alt="Fork me on GitHub"
            />
          </a>
          <h2>Welcome to this React Bootstrap sample - with Typescript!</h2>
          <p>
            This is how to build a website with React, React-Router,
            React-Bootstrap and TypeScript.
          </p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="./assets/person-1.jpg" circle className="profile-pic" />
            <h3>Frank</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="./assets/person-2.jpg" circle className="profile-pic" />
            <h3>Vanessa</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="./assets/person-3.jpg" circle className="profile-pic" />
            <h3>Riff</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
