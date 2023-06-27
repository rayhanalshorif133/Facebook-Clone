import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function AddStoryCard() {

  const { data: session } = useSession();

  const { name, image } = session?.user;

  return (
    <div className='p-1 flex flex-col ml-4'>
      <div>
        <Image src={image} alt="profile"
          className="h-[6rem] w-28 rounded-t-lg object-cover" width={28} height={28} />
      </div>
      <div className="h-[6rem] w-28 rounded-b-lg text-center m-auto bg-[#323436]">
        <h2 className="text-white text-[1rem] font-bold align-middle mt-13">
          Create story
        </h2>
      </div>
    </div>
  )
}
