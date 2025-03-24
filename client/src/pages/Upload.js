import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (file) {
      alert(`File "${file.name}" uploaded successfully!`);
      // Here, you can send the file to the backend using an API request.
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-4">Upload Your Resume</h2>
      <Form onSubmit={handleUpload}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </Container>
  );
};

export default Upload;
