import React from "react";
import { Card } from "react-bootstrap";

function CardProject(props) {
  return (
    <div>
      <Card className="border-0">
        <Card.Img variant="top" src={props.image} className="img-fluid" />
        <Card.Body className="p-0">
          <Card.Title className="mt-2">{props.title}</Card.Title>
          <Card.Text className="mt-2">{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProject;
