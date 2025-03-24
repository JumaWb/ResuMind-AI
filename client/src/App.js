import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <Container className="text-center mt-5">
          <Button />
          <Card />
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
