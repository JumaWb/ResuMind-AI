import React from "react";
import CustomCard from "../components/Card";
import CustomButton from "../components/Button";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>AI-Powered Resume Analyzer</h1>
      <CustomCard />
      <CustomButton text="Get Started" />
    </div>
  );
};

export default Home;
