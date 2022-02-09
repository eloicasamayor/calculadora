export default function ClearButton({ funcio }) {
  return (
    <button onClick={() => funcio()} className="clearButton">
      Clear
    </button>
  );
}
