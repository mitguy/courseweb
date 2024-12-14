export default function Button(p) {
  return (
    <button onClick={p.onClick} className="h-16 w-128 bg-yellow text-2xl text-center active:bg-white active:text-yellow">{p.name}</button>
  );
}