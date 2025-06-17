import React, { useState } from "react";

const conversionFactors: Record<string, number> = {
  au: 1.5813e-5,
  parsec: 3.26156,
  kiloparsec: 3261.56,
  megaparsec: 3.26156e6,
};

export default function DistanceConverter() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("au");

  const convertToLightYears = (input: string, fromUnit: string) => {
    const number = parseFloat(input);
    if (isNaN(number)) return "";
    return (number * conversionFactors[fromUnit]).toExponential(5);
  };

  const converted = convertToLightYears(value, unit);

  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Conversión a Años Luz
      </h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Distancia:</label>
        <input
          type="number"
          placeholder="Ingresa un valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Unidad:</label>
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        >
          <option value="au">AU (Unidades Astronómicas)</option>
          <option value="parsec">Parsec</option>
          <option value="kiloparsec">Kiloparsec</option>
          <option value="megaparsec">Megaparsec</option>
        </select>
      </div>

      <div>
        <label>Resultado:</label>
        <p
          style={{
            fontFamily: "monospace",
            color: "green",
            marginTop: "0.5rem",
          }}
        >
          {converted ? `${converted} años luz` : "—"}
        </p>
      </div>
    </div>
  );
}
