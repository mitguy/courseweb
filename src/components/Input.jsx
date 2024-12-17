export default function Input({ id, value, onChange, type, width }) {
  return (
    <input id={id} value={value} onChange={onChange} type={type} className={`h-16 w-${(width) ? width : "128"} bg-black border-2 border-yellow focus:outline-none text-2xl text-center`}></input>
  );
}