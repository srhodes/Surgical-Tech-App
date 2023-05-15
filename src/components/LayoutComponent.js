import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const LayoutComponent = () => {

  return (
    <>
      <Row>
          <Col xs="6" sm="4">
          <Card>
        <CardImg top width="100%" src="https://i.ebayimg.com/images/g/nuQAAOSwgbBild2m/s-l1600.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kidney Tray</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Learn more</Button>
        </CardBody>
      </Card>
          </Col>
          <Col xs="6" sm="4">
          <Card>
        <CardImg top width="100%" src="https://i.ebayimg.com/images/g/Fv4AAOSwYtBild16/s-l1600.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Goldman Fox Scissor</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Learn more</Button>
        </CardBody>
      </Card>
          </Col>
          <Col sm="4">
          <Card>
        <CardImg top width="100%" src="https://i.ebayimg.com/images/g/IoYAAOSwwBZild26/s-l1600.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Crilewood needle holder</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Learn more</Button>
        </CardBody>
      </Card>
          
          </Col>
      </Row>
    </>
  );
};

export default LayoutComponent;