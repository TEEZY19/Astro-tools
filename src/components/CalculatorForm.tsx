import React, { useState } from "react";

const G = 6.6743e-11;
const masaSolar = 1.98847e30;
const unidadAMetros: Record<string, number> = {
  AU: 1.496e11,
  pc: 3.086e16,
  kpc: 3.086e19,
  Mpc: 3.086e22,
};

export default function CalculatorForm() {
  const [modo, setModo] = useState("velocidad");
  const [educativo, setEducativo] = useState(false);
  const [unidad, setUnidad] = useState("AU");

  // Entradas
  const [masa, setMasa] = useState("");
  const [radio, setRadio] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [masaObjeto, setMasaObjeto] = useState("");

  const [resultado, setResultado] = useState("");

  const convertirAMetros = (valor: number) =>
    valor * (unidadAMetros[unidad] || 1);

  const calcular = () => {
    const m = parseFloat(masa);
    const r = convertirAMetros(parseFloat(radio));
    const T = parseFloat(periodo) * 365.25 * 24 * 3600;
    const m2 = parseFloat(masaObjeto);

    let res = "";

    if (modo === "velocidad") {
      const v = Math.sqrt((G * m) / r);
      res = `➡️ Velocidad orbital: ${(v / 1000).toFixed(2)} km/s`;
      if (educativo)
        res += `\n📘 Usamos v = √(G·M/r), con G = 6.67430e-11, M en kg y r en metros.`;
    } else if (modo === "masa") {
      const a = convertirAMetros(parseFloat(radio));
      const M = (4 * Math.PI ** 2 * a ** 3) / (G * T ** 2);
      res = `➡️ Masa del cuerpo central ≈ ${M.toExponential(2)} kg (${(
        M / masaSolar
      ).toFixed(2)} masas solares)`;
      if (educativo)
        res += `\n📘 Usamos la tercera ley de Kepler: M = (4π²·a³)/(G·T²).`;
    } else if (modo === "energia") {
      const E = -(G * m * m2) / (2 * r);
      res = `➡️ Energía total orbital: ${E.toExponential(2)} J`;
      if (educativo)
        res += `\n📘 Usamos E = -G·M·m / 2r para sistemas ligados gravitacionalmente.`;
    }

    setResultado(res);
  };

  return (
    <div style={{ textAlign: "left", marginTop: "2rem" }}>
      <label>🔢 Modo de cálculo:</label>
      <select value={modo} onChange={(e) => setModo(e.target.value)}>
        <option value="velocidad">Velocidad Orbital</option>
        <option value="masa">Masa del cuerpo central</option>
        <option value="energia">Energía orbital total</option>
      </select>

      <div style={{ marginTop: "1rem" }}>
        <label>🌍 Unidad (AU, pc, kpc, Mpc):</label>
        <select value={unidad} onChange={(e) => setUnidad(e.target.value)}>
          <option value="AU">AU</option>
          <option value="pc">pc</option>
          <option value="kpc">kpc</option>
          <option value="Mpc">Mpc</option>
        </select>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label>🌟 Masa del cuerpo central (kg):</label>
        <input
          type="number"
          value={masa}
          onChange={(e) => setMasa(e.target.value)}
        />
      </div>

      {modo === "energia" && (
        <div style={{ marginTop: "1rem" }}>
          <label>🪐 Masa del objeto (kg):</label>
          <input
            type="number"
            value={masaObjeto}
            onChange={(e) => setMasaObjeto(e.target.value)}
          />
        </div>
      )}

      {(modo === "velocidad" || modo === "energia") && (
        <div style={{ marginTop: "1rem" }}>
          <label>📏 Radio orbital:</label>
          <input
            type="number"
            value={radio}
            onChange={(e) => setRadio(e.target.value)}
          />
        </div>
      )}

      {modo === "masa" && (
        <>
          <div style={{ marginTop: "1rem" }}>
            <label>🔁 Periodo orbital (años):</label>
            <input
              type="number"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <label>📏 Semieje mayor:</label>
            <input
              type="number"
              value={radio}
              onChange={(e) => setRadio(e.target.value)}
            />
          </div>
        </>
      )}

      <div style={{ marginTop: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={educativo}
            onChange={() => setEducativo(!educativo)}
          />{" "}
          Modo educativo
        </label>
      </div>

      <button
        onClick={calcular}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0b5ed7",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Calcular
      </button>

      <pre
        style={{ marginTop: "1.5rem", background: "#f5f5f5", padding: "1rem" }}
      >
        {resultado}
      </pre>
    </div>
  );
}
