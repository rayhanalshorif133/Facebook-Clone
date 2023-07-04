
export default function StoryCard({ random }) {


  const URL = `https://picsum.photos/200/300?random=${random}`;

  return (
    <div className='p-1 cursor-pointer'>
      <img src={URL} alt="profile"
        className="h-[12rem] w-28 rounded-lg" width={28} height={28} />
    </div>
  )
}
