export default function Title({ name }) {
  return (
    <div className={`h-16 w-full flex flex-row justify-center items-center bg-yellow`}>
      <h2 className="text-4xl font-extrabold">{ name }</h2>
    </div>
  );
}