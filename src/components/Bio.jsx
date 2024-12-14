export default function Bio({ bio }) {
  return (
    <div className={`h-16 w-128 flex flex-row justify-center items-center`}>
      <p className="text-xl">{ bio }</p>
    </div>
  );
}