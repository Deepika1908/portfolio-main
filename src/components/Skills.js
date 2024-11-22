import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Skills = () => {
  const skills = [
    {
      title:"Strategic Planning",
      description:" Analyzing business environments and developing long-term goals.",
    },
    {
      title: "Operations Management",
      description: "Familiarity with supply chain processes, quality control, and logistics.",
      // image: "../assets/img/operation-management.png"
    },
    {
      title:"Problem-Solving",
      description:" Identifying issues, evaluating options, and implementing solutions.",
    },
    {
      title: "Accounting and Finance",
      description: "Understanding financial statements, budgeting, and investment principles.",
      // image: "../assets/img/accounting-finance.png"
      
    },
    {
      title: "Management and Leadership",
      description: "Skills in team management, decision-making, and organizational behavior.",
      // image: "../assets/img/management-leadership.png"
    },
    
    {
      title:"Verbal Communication",
      description:" Ability to articulate ideas clearly in meetings, presentations, and networking events.",
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