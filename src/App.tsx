import React from "react";
import CalculatorForm from "./components/CalculatorForm";

export default function App() {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        🌌 Calculadora Astronómica
      </h1>
      <p style={{ marginBottom: "2rem" }}>
        Explora conceptos del universo como velocidad orbital, masa estelar, y
        energía total usando esta herramienta interactiva.
      </p>
      <CalculatorForm />
      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#777" }}>
        Desarrollado por Tomas con ayuda de ChatGPT 🚀
      </footer>
    </div>
  );
}
