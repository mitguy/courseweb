export default function FollowerCount({ count }) {
  return (
    <div className="h-fit w-full flex justify-center items-center">
      <p className="text-white text-lg font-bold">{`${(count) ? count : "0"} followers`}</p>
    </div>
  )
}