import { useState } from 'react';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { MdOndemandVideo } from 'react-icons/md';
import { TbVideoPlus } from 'react-icons/tb';
import { TfiBook } from 'react-icons/tfi';
import AddStoryCard from './AddStoryCard';
import StoryCard from './StoryCard';
import StoryNav from './StoryNav';
import AddReelCard from '../reel/AddReelCard';

export default function StoryIndex() {

  const [isActive, setIsActive] = useState({
    stories: true,
    reels: false,
    rooms: false
  });


  const numberOfStory = 20;

  const handleStories = () => {
    setIsActive({
      stories: true,
      reels: false,
      rooms: false
    });
  };
  const handleReels = () => {
    setIsActive({
      stories: false,
      reels: true,
      rooms: false
    });
  };  
  const handleRooms = () => {
    setIsActive({
      stories: false,
      reels: false,
      rooms: true
    });
  };

  return (
    <div className='bg-[#242526] h-auto w-full pb-3'>
      <div className='hidden xl:flex justify-between mx-auto'>
        <StoryNav Icon={TfiBook} title="Stories" isActiveStatus={isActive.stories} clickAbleToggle={handleStories}/>
        <StoryNav Icon={MdOndemandVideo} title="Reels" isActiveStatus={isActive.reels} clickAbleToggle={handleReels}/>
        <StoryNav Icon={TbVideoPlus} title="Rooms" isActiveStatus={isActive.rooms} clickAbleToggle={handleRooms}/>
      </div>
      <div className="bg-[#242526] w-full h-auto border-t-2 border-black xl:border-t-0 xl:border-none flex overflow-hidden">
        <ScrollingCarousel show={4} slide={4} swiping={true}>
          {
            isActive.stories === true? <AddStoryCard /> : <AddReelCard />
          }
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
