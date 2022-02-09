export default function Button({ valor, funcio }) {
  return <button onClick={() => funcio(valor)}>{valor}</button>;
}
