import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function CardReview(props) {
  return (
    <div>
      <Card className="border-reviews">
        <Card.Body>
          <Card.Title className="mt-2">{props.title}</Card.Title>
          <Card.Text className="mt-2">
            {props.text}
          </Card.Text>
          <Row className="mt-3">
            <Col md={2}>
                <img src={props.avatar} alt={props.avatar} />
            </Col>
            <Col md={8} className='ms-3'>
                <h5>{props.name}</h5>
                <p>{props.job}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardReview;
