export default function ErrorBox({ className, message }) {
  return (
    <div className={`h-16 w-128 flex flex-row justify-center items-center ${className}`}>
      <p className="text-red text-2xl text-center">{ message }</p>
    </div>
  );
}