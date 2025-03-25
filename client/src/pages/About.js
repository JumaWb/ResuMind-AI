import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CheckCircle, Eye, Star} from "lucide-react";
import "../styles/About.css"; 



const About = () => {
  return (
    <Container fluid className="py-5 about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="p-4 shadow-lg rounded-4 border-0">
              <Card.Body>
                <h2 className="text-center mb-4 fw-bold text-primary">
                  About <span className="text-dark">ResuMind-AI</span>
                </h2>
                <p className="text-muted text-center">
                  ResuMind-AI is an innovative platform that leverages AI-driven 
                  insights to help users craft standout resumes effortlessly. 🚀
                </p>

                <hr className="my-4" />

                <h4 className="text-primary d-flex align-items-center">
                  <Eye className="me-2" /> Our Vision
                </h4>
                <p className="text-muted">
                  We empower job seekers with cutting-edge AI tools to enhance 
                  their success in an ever-evolving job market.
                </p>

                <h4 className="text-primary d-flex align-items-center mt-4">
                  <Star className="me-2" /> Why Choose Us?
                </h4>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <CheckCircle className="text-success me-2" /> AI-driven resume optimization
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle className="text-success me-2" /> Personalized job-matching insights
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle className="text-success me-2" /> User-friendly and intuitive design
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle className="text-success me-2" /> Continuous updates with the latest hiring trends
                  </li>
                </ul>

                <div className="text-center mt-4">
                  <h5 className="fw-bold text-dark">
                    Stay Ahead with ResuMind-AI! 🚀
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
