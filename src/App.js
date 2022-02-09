import "./App.css";

import { useState } from "react";

import Button from "./Components/Button";
import ClearButton from "./Components/ClearButton";
import Display from "./Components/Display";

function App() {
  const [textDisplay, setValor] = useState(0);
  let operacio = null;
  let esperantSegonValor = false;

  const posarInput = (input) => {
    !esperantSegonValor ? setValor(input) : calcularOperacio(input);
  };
  const suma = () => {
    console.log("+");
    esperantSegonValor = true;
    operacio = "+";
  };
  const resta = () => {
    console.log("-");
    esperantSegonValor = true;
    operacio = "-";
  };

  const clear = () => {
    esperantSegonValor = false;
    posarInput(0);
  };

  const calcularOperacio = (input) => {
    console.log("calculant");
    esperantSegonValor = false;
    operacio === "+"
      ? posarInput(textDisplay + input)
      : posarInput(textDisplay - input);
  };

  return (
    <div className="App">
      <div className="Calculadora">
        <Display text={textDisplay} />
        <Button valor={1} funcio={posarInput} />
        <Button valor={2} funcio={posarInput} />
        <Button valor={3} funcio={posarInput} />
        <Button valor={4} funcio={posarInput} />
        <Button valor={5} funcio={posarInput} />
        <Button valor={6} funcio={posarInput} />
        <Button valor={7} funcio={posarInput} />
        <Button valor={8} funcio={posarInput} />
        <Button valor={9} funcio={posarInput} />
        <Button valor={"+"} funcio={suma} />
        <Button valor={"-"} funcio={resta} />
        <ClearButton funcio={clear} />
      </div>
    </div>
  );
}

export default App;
