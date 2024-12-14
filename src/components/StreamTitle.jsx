export default function StreamTitle({ title }) {
  return (
    <div className={`h-16 w-128 flex flex-row justify-center items-center`}>
      <p className="w-64 text-xl text-center truncate">{ title }</p>
    </div>
  );
}