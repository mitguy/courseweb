export default function UsernameBox({ name }) {
  return (
    <div className="h-16 w-64 flex flex-row justify-center items-center bg-yellow">
      <p className="text-2xl font-extrabold">{ name }</p>
    </div>
  );
}