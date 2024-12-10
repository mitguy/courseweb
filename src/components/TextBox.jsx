export default function TextBox({ name }) {
  return (
    <div className="h-16 w-128 flex flex-row justify-start items-center">
      <p className="text-white text-2xl">{ name }</p>
    </div>
  );
}