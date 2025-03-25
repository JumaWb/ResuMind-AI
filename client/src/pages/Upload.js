import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (file) {
      setMessage({ text: `File "${file.name}" uploaded successfully! ✅`, type: "success" });
      // Here, you can send the file to the backend using an API request.
    } else {
      setMessage({ text: "Please select a file to upload. ⚠️", type: "danger" });
    }
  };

  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-4">Upload Your Resume</h2>
      {message.text && <Alert variant={message.type}>{message.text}</Alert>}
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
