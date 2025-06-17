import React from "react";
import CalculatorForm from "./components/CalculatorForm";
import DistanceConverter from "./components/DistanceConverter";

export default function App() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}
      >
        Calculadora Astronómica
      </h1>

      <CalculatorForm />
      <DistanceConverter />
    </div>
  );
}
