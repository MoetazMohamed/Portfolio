import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import cifar from "../../Assets/cifar.png";
import steam from "../../Assets/Steam_icon_logo.svg.png";
import bitsOfCode from "../../Assets//wsi.jpg";
import car from "../../Assets/car-out.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              title="SAM-Guided Mask Sampling for Efficient and
 Generalizable MIL Classification of Pathology
 Slide"
              description= {
                <>
                  Collaborated closely with { } 
                  <a 
                    href="https://mila.quebec/en/directory/mahdi-hosseini" // Replace with the actual link to Professor Mahdi Hoseini's profile
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: "purple", textDecoration: "none", fontWeight: "bold" }}
                  >
                     Professor Mahdi Hoseini 
                  </a> 
                  { } and his PhD student Youssef to develop a novel approach for enhancing tissue segmentation and extraction in cancer diagnosis. Leveraged a CLAM-based tissue extraction algorithm combined with the Segment Anything Model (SAM) to improve precision and efficiency in whole slide image (WSI) analysis. Our work resulted in a research paper submission to the prestigious IPIMIA Medical Imaging Conference.
                </>
              }
              imgPath={bitsOfCode}// Replace with actual YouTube link// Replace with actual demo link
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Library Seating Availability System"
              description="Developed a real-time embedded system to monitor and display library seating availability. Leveraged TTGO ESP32 microcontrollers with pressure sensors to detect seat occupancy, sending updates via HTTP to a backend. Built the backend with NestJS and MongoDB to manage data efficiently and implemented a front-end in Angular 16 with WebSockets for real-time updates."
              youtubeUrl="https://www.youtube.com/embed/H3hLs0Jikmw?si=JmRh7YUqlojD-pxs" // Replace with an actual image path
              ghLink="https://github.com/example-library-system"
              // // Replace with actual GitHub link
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              title="Defenders of Hogwarts"
              description="A Harry Potter-themed gesture-controlled game developed using Unity. Integrated real-time hand gesture recognition via Python and Unity sockets, enhancing interactivity and realism in magical combat scenarios."
              youtubeUrl="https://www.youtube.com/embed/WJHjF1MTiys?si=7jdg6IuG5HQ4pwDs" // Replace with actual YouTube link
              ghLink="https://github.com/gevorgalaverdyan/AvadaKedavra-ConuHack2024"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Robust Image Classification"
              description="Built three CNN models to handle label noise in the CIFAR-10 dataset. Achieved improved accuracy across noise levels (30%-90%) by integrating advanced loss functions and techniques like Symmetric Cross-Entropy and Active Passive Loss."
              imgPath={cifar} // Replace with actual image path
              ghLink="https://github.com/anashoussaini/Noisy-Labels-Training-on-CIFAR-10"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Steam Game Ranking Prediction"
              description="Built a machine learning model to predict the rankings of Steam games based on user reviews and game metadata. Utilized Python with libraries like Pandas and Scikit-learn for data preprocessing and model training. Applied regression algorithms to forecast rankings and improve prediction accuracy."
              ghLink="https://github.com/MoetazMohamed/Steam-game-raning-prediction"
              imgPath={steam} // Replace with actual image path
            />
          </Col>
          <Col md={4} className="project-card">
                      <ProjectCard
                        title="Escape Grid"
                        description="Developed a puzzle game simulating a car parking problem. Utilized A*, Depth-First Search, and Uniform Cost Search algorithms to optimize pathfinding, achieving a 20% reduction in computation time."
                        imgPath={car} // Replace with actual image path
                        ghLink="https://github.com/AbdallahSaid01/Comp-472-mini-project-2"
                      />
                    </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
