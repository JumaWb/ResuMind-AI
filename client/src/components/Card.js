import React from "react";
import { Card, Button } from "react-bootstrap";

const CustomCard = () => {
  return (
    <Card className="text-center mt-4">
      <Card.Body>
        <Card.Title>Optimize Your Resume</Card.Title>
        <Card.Text>
          Upload your resume and get AI-powered feedback to improve it.
        </Card.Text>
        <Button variant="success">Upload Resume</Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
