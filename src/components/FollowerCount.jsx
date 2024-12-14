export default function FollowerCount({ count }) {
  return (
    <div className="h-fit w-full flex justify-center items-center">
      <p className="text-2xl font-bold">{`${(count) ? count : "0"} followers`}</p>
    </div>
  )
}