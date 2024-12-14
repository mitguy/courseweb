export default function CreatedAge({ createdAt }) {
  return (
    <div className="h-fit w-full flex justify-center items-center">
      <p className="text-base">{`Since: ${createdAt}`}</p>
    </div>
  )
}