import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';

export default function AddStoryCard() {

  const { data: session } = useSession();

  const { name, image } = session?.user;

  return (
    <div className='p-1 flex flex-col ml-4 cursor-pointer'>
      <div className='overflow-visible'>
        <Image src={image} alt="profile"
          className="h-[9rem] w-28 rounded-t-lg object-cover" width={28} height={28} />
        <div className="-mt-5">
          <div className="rounded-full text-white items-center m-auto flex">
            <div className="bg-black h-10 w-10 rounded-full justify-center items-center m-auto flex">
              <div className="h-8 w-8 bg-[#297BE5] rounded-full justify-center items-center m-auto flex">
                <FaPlus className='mx-auto items-center' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[3rem] w-28 rounded-b-lg text-center m-auto">

        <h2 className="text-white text-[1rem] font-bold align-middle mt-13">
          Create story
        </h2>

      </div>
    </div>
  )
}
