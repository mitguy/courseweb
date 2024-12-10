export default function Content({children}) {
  return (
    <div className="flex flex-1 flex-col justify-center items-center border-2 border-yellow">
      <div className="flex flex-col h-fit w-fit justify-center items-center">
        {children}
      </div>
    </div>
  );
}