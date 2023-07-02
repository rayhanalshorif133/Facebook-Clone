import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { MdOndemandVideo } from 'react-icons/md';
import { TbVideoPlus } from 'react-icons/tb';
import { TfiBook } from 'react-icons/tfi';
import AddStoryCard from './AddStoryCard';
import StoryCard from './StoryCard';
import StoryNav from './StoryNav';

export default function StoryIndex() {


  const numberOfStory = 20;

  return (
    <div className='bg-[#242526] h-auto w-full'>
      <div className='hidden xl:flex justify-between mx-auto'>
        <StoryNav Icon={TfiBook} title="Stories"  isActive={true}/>
        <StoryNav Icon={MdOndemandVideo} title="Reels" />
        <StoryNav Icon={TbVideoPlus} title="Rooms" />
      </div>
      <div className="bg-[#242526] w-full h-auto border-t-2 border-black xl:border-t-0 xl:border-none flex overflow-hidden">
        <ScrollingCarousel show={4} slide={4} swiping={true}>
          <AddStoryCard />
          {
            Array(numberOfStory).fill().map((_, i) => (
              <StoryCard key={i} />
            ))
          }
          
        </ScrollingCarousel>
      </div>
    </div>
  )
}
