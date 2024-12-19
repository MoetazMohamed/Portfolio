import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./WorkExperienceCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/genetic.png";

import concordia from "../../Assets/Concordia-logo.png";
import { TbDeviceSim1 } from "react-icons/tb";

function WorkExperience() {
  const Unification_experience= [1]
  const AutoVu_experience = [2]
  const Teaching_assitant = [2]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My professional <strong className="purple">Work  Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
        <Col md={4} className="work-experience-card ">
            <ProjectCard
                imgPath={chatify}
                title="Genetec – Unification Team"
                position = "Full stack devoloper intern"
                startDate="May 2024"
                endDate="Decemebr 2024"
                description = "Worked on building a scalable and efficient web application integrating multiple real-time systems."
                experiences={[
                  "Built a scalable web application integrating video surveillance, license plate recognition (LPR), and access card management systems.",
    "Improved the efficiency of end-to-end (E2E) testing by 75% by enabling parallel test execution.",
    "Developed the front-end using Angular NX and NGXS state management and the back-end with C# .NET 8.",
    "Utilized WebSockets for real-time video streaming and event monitoring."
                ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Genetec – AutoVu"
              startDate="January 2023"
              position = "Full stack devoloper intern"
              endDate="April 2024"
              description="Contributed to developing a microservices-based cloud platform for vehicle recognition and management."
              experiences={[
                "Developed key features for the back-end using .NET Core/C# and the front-end using Angular.",
                "Facilitated communication among services by implementing Service Bus messaging and REST APIs.",
                "Enhanced deployment efficiency by integrating CI/CD pipelines using Azure DevOps.",
                "Conducted code reviews and implemented rigorous unit and integration tests, ensuring high-quality code."
              ]}
            />
          </Col> 



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={concordia}
              title="Concordia University – Teaching Assistant"
  startDate="September 2024"
  endDate="December 2024"
  description="Supported students in understanding advanced Java programming concepts and object-oriented principles."
  experiences={[
    "Led tutorial sessions for over 50 students, simplifying complex Java programming topics.",
    "Covered key concepts such as recursion, polymorphism, inheritance, and error handling.",
    "Assisted with assignments and provided hands-on programming exercises for real-world applications.",
    "Created personalized content to enhance student understanding of object-oriented design."
  ]}
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default WorkExperience;
