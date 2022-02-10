import "./App.css";

import { useState } from "react";

import Button from "./Components/Button";
import ClearButton from "./Components/ClearButton";
import Display from "./Components/Display";

function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [operacio, setOperacio] = useState(null);
  const [numeroNegatiu, setNumeroNegatiu] = useState(false);

  const escriureNumero = (input) => {
    if (operacio === null) {
      numeroNegatiu ? setValor1(-input) : setValor1(valor1 * 10 + input);
    } else {
      setValor2(valor2 * 10 + input);
      //calcularOperacio(input);
    }
    setNumeroNegatiu(false);
    console.log(
      "valor1=" +
        valor1 +
        " / valor2=" +
        valor2 +
        " / esperantSegonValor=" +
        operacio
    );
  };
  const suma = () => {
    console.log("+");
    setOperacio("+");
  };
  const resta = () => {
    /* if (operacio === null && valor1 === 0) {
      setNumeroNegatiu(true);
    } else {
      setOperacio("-");
    } */
    setOperacio("-");
    console.log("numeroNegatiu=" + numeroNegatiu + " " + valor1);
  };

  const clear = () => {
    setOperacio(null);
    setValor1(0);
    setValor2(0);
  };

  const igual = () => {
    console.log("calculant..." + operacio);

    operacio === "+" ? setValor1(valor1 + valor2) : setValor1(valor1 - valor2);
    setValor2(0);
    setOperacio(null);
  };

  return (
    <div className="App">
      <div
        className={
          "Calculadora " +
          "suma-" +
          (operacio === "+") +
          " " +
          "resta-" +
          (operacio === "-")
        }
      >
        <Display
          text1={valor1 === 0 ? "" : valor1}
          text2={valor2 === 0 ? "" : valor2}
        />
        <Button classe="num" valor={1} funcio={escriureNumero} />
        <Button classe="num" valor={2} funcio={escriureNumero} />
        <Button classe="num" valor={3} funcio={escriureNumero} />
        <Button classe="num" valor={4} funcio={escriureNumero} />
        <Button classe="num" valor={5} funcio={escriureNumero} />
        <Button classe="num" valor={6} funcio={escriureNumero} />
        <Button classe="num" valor={7} funcio={escriureNumero} />
        <Button classe="num" valor={8} funcio={escriureNumero} />
        <Button classe="num" valor={9} funcio={escriureNumero} />
        <Button classe="num" valor={0} funcio={escriureNumero} />
        <Button classe="suma" valor={"+"} funcio={suma} />
        <Button classe="resta" valor={"-"} funcio={resta} />
        <Button valor={"="} funcio={igual} />
        <ClearButton funcio={clear} />
      </div>
    </div>
  );
}

export default App;
