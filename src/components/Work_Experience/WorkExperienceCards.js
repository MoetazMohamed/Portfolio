import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function WorkExperienceCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text> <p style={{justifySelf : "center"}}>{props.position}</p></Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          {props.startDate} – {props.endDate || "Present"} 
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify", lineHeight: "1.8" }}>
          <ul style={{ paddingLeft: "20px" }}>
            {props.experiences.map((experience, index) => (
              <li 
                key={index} 
                style={{ marginBottom: "10px" }}
              >
                {experience}
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkExperienceCards;