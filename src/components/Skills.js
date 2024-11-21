import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Skills = () => {
  const skills = [
    {
      title: "Web Development",
      description: "HTML, CSS, JavaScript, React",
      imgUrl: "../assets/img/project-img1.png",
    },
    {
      title: "Backend Development",
      description: "Node.js, Express, MongoDB",
      imgUrl: "../assets/img/project-img2.png",
    },
    {
      title: "Mobile Development",
      description: "React Native, Flutter",
      imgUrl: "../assets/img/project-img3.png",
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are some of the skills I have acquired over the years.</p>
              <Row>
                {skills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;