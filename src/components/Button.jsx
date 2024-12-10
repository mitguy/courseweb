export default function Button(p) {
  return (
    <button onClick={p.onClick} type={p.type} className="h-16 w-128 bg-yellow text-2xl text-center text-white active:bg-white active:text-yellow">{p.name}</button>
  );
}