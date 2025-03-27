import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert, ListGroup, Card, Spinner } from "react-bootstrap";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [uploadedResumes, setUploadedResumes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [atsScore, setAtsScore] = useState(null); // ATS score

  useEffect(() => {
    fetchUploadedResumes();
  }, []);

  const fetchUploadedResumes = async () => {
    try {
      const response = await fetch("/api/resumes");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const resumes = await response.json();
      setUploadedResumes(resumes);
    } catch (error) {
      console.error("Error fetching resumes:", error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!file) {
      setMessage({ text: "Please select a file to upload.", type: "warning" });
      return;
    }

    setLoading(true); // Show loading indicator

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const { atsScore } = await response.json(); // Assume API returns ATS score
        setMessage({ text: `File "${file.name}" uploaded successfully!`, type: "success" });
        setAtsScore(atsScore);
        fetchUploadedResumes();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      setMessage({ text: "Error uploading file. Please try again.", type: "danger" });
      console.error("Upload error:", error);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  // Function to determine ATS score color
  const getAtsColor = () => {
    if (atsScore === null) return "#aaa"; // Gray for N/A
    if (atsScore >= 80) return "green";
    if (atsScore >= 50) return "orange";
    return "red";
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100 h-100">
        {/* Upload Section */}
        <Col md={5} className="d-flex align-items-center justify-content-center bg-light">
          <Card className="p-4 shadow-sm w-100 h-100 d-flex flex-column justify-content-center" style={{ maxWidth: "500px" }}>
            <Card.Body className="text-center">
              <Card.Title className="mb-3">Upload Your Resume</Card.Title>
              {message.text && <Alert variant={message.type}>{message.text}</Alert>}
              <Form onSubmit={handleUpload}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Upload
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Dashboard Section */}
        <Col md={7} className="d-flex align-items-center justify-content-center bg-dark text-white">
          <Card className="p-4 shadow-lg w-100 h-100 d-flex flex-column justify-content-between bg-secondary">
            <Card.Body>
              <Card.Title className="text-center mb-3">Resume Dashboard</Card.Title>

              {/* ATS Score Section - Always Visible */}
              <div className="text-center mb-3">
                <h5>ATS Compatibility</h5>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: `6px solid ${getAtsColor()}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: getAtsColor(),
                    margin: "auto",
                  }}
                >
                  {atsScore !== null ? `${atsScore}%` : "N/A"}
                </div>
              </div>

              {/* Loading Spinner */}
              {loading && (
                <div className="text-center my-2">
                  <Spinner animation="border" variant="primary" />
                  <p>Analyzing Resume...</p>
                </div>
              )}

              {/* Uploaded Resumes List */}
              <ListGroup variant="flush" className="mb-3">
                {uploadedResumes.length > 0 ? (
                  uploadedResumes.map((resume) => (
                    <ListGroup.Item key={resume.id} className="d-flex justify-content-between align-items-center bg-light text-dark">
                      <a href={resume.filepath} target="_blank" rel="noopener noreferrer">
                        {resume.filename}
                      </a>
                      <Button variant="outline-danger" size="sm">
                        Delete
                      </Button>
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item className="text-center text-muted">No resumes uploaded yet.</ListGroup.Item>
                )}
              </ListGroup>

              {/* Action Buttons */}
              <div className="d-flex justify-content-between">
                <Button variant="outline-light" className="w-45">
                  Improve Resume
                </Button>
                <Button variant="outline-warning" className="w-45">
                  Compare with Job Description
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Upload;
