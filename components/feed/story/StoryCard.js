
export default function StoryCard({ random }) {


    random = random + 1;
    const URL = `https://picsum.photos/200/300?random=${random}`;
  
    return (
      <div className="group">
        <div className='p-1 cursor-pointer relative flex'>
          <div className="absolute flex z-10">
            <div className="bg-[#1778F2] rounded-full h-10 w-10 mt-2 ml-2 justify-center items-center flex">
              <img src={URL} alt="profile_logo" className="h-8 w-8 rounded-full justify-center items-center flex" />
            </div>
          </div>
          <img src={URL} alt="profile"
            className="h-[12rem] w-28 rounded-lg group-hover:scale-105" />
          <div className="absolute flex bottom-0 mb-5 ml-2">
            <h2 className='text-white text-xs truncate w-28 text-left font-semibold'>
              Story - {random}
            </h2>
          </div>
        </div>
      </div>
    )
  }