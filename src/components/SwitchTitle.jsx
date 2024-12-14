export default function SwitchTitle({ title }) {
  return (
    <div className="w-full h-16 flex justify-between items-center">
      <div className="w-fit h-fit ml-16 pr-8 border-b-2 border-yellow">
        <p className="text-3xl font-bold">{ title }</p>
      </div>
    </div>
  )
}