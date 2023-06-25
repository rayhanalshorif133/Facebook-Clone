import Image from 'next/image';

export default function StoryCard() {
  return (
    <div className='p-3'>
      <Image src="https://picsum.photos/400?random=1" alt="profile" 
      className="h-64 w-40 rounded-lg object-cover" width={40} height={64} />
    </div>
  )
}
