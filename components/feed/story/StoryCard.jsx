import Image from 'next/image';

export default function StoryCard() {
  return (
    <div className='p-1'>
      <Image src="https://picsum.photos/400?random=1" alt="profile"
        className="h-[12rem] w-28 rounded-lg object-cover" width={28} height={28} />
    </div>
  )
}
