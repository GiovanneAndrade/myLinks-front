import React, { useEffect, useState } from "react";
import { ButtonContainer } from "./ButtonStyles";

export const Button = () => {
  const [teste, setTeste] = useState(`0%`);
  const [value, setValue] = useState(``);
  function handleNextMouseLeave() {
    setTeste("20%");
    if (teste === "20%") setTeste("0%");
  }
  function handlePrevMouseLeave() {}

  useEffect(() => {
    const interval = setInterval(() => {
      setTeste("0%");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ButtonContainer type={teste}>
      <input required type="text" placeholder="Cole Aqui Seu Link" />
      <button
        onMouseEnter={handleNextMouseLeave}
        onMouseLeave={handlePrevMouseLeave}
      >
        Enviar
      </button>
    </ButtonContainer>
  );
};
