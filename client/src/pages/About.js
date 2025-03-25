import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-lg rounded">
            <Card.Body>
              <h2 className="text-center mb-4">About ResuMind-AI</h2>
              <p>
                ResuMind-AI is an innovative platform designed to help users
                create optimized resumes using AI-driven insights. Our mission
                is to simplify the job application process by providing tailored
                recommendations and formatting suggestions to make every resume
                stand out.
              </p>
              <h4 className="mt-4">Our Vision</h4>
              <p>
                We believe in empowering job seekers with smart technology that
                enhances their chances of success in an ever-evolving job
                market.
              </p>
              <h4 className="mt-4">Why Choose Us?</h4>
              <ul>
                <li>AI-driven resume optimization</li>
                <li>Personalized job-matching insights</li>
                <li>User-friendly and intuitive design</li>
                <li>Continuous updates with the latest hiring trends</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
