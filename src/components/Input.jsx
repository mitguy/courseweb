export default function Input(p) {
  return (
    <input id={p.id} value={p.value} onChange={p.onChange} type={p.type} className="h-16 w-128 bg-black text-white border-2 border-yellow focus:outline-none text-2xl text-center"></input>
  );
}