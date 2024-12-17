export default function Button({ onClick, name, width, height }) {
  return (
    <button onClick={onClick} className={`h-${(height) ? height : "16"} w-${(width) ? width : "128"} bg-yellow text-2xl text-center active:bg-white active:text-yellow`}>{ name }</button>
  );
}