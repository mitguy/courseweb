export default function Main({children}) {
  return (
    <main className="h-screen max-h-screen w-screen max-w-screen flex flex-col bg-black">
      {children}
    </main>
  );
}