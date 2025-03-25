import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CustomCard = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleUploadClick = () => {
    navigate("/upload"); // Redirects to the Upload page
  };

  return (
    <Card className="text-center mt-4">
      <Card.Body>
        <Card.Title>Optimize Your Resume</Card.Title>
        <Card.Text>
          Upload your resume and get AI-powered feedback to improve it.
        </Card.Text>
        <Button variant="success" onClick={handleUploadClick}>
          Upload Resume
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
