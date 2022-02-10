export default function Button({ classe, valor, funcio }) {
  return (
    <button className={"btn-" + classe} onClick={() => funcio(valor)}>
      {valor}
    </button>
  );
}
