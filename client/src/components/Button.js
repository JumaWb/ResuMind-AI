import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ text, onClick }) => {
  return (
    <Button variant="primary" className="mt-3" onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
