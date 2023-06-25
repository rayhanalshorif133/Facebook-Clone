import React from 'react'
import Image from 'next/image'
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';
import StoryCard from './StoryCard';
import AddStoryCard from './AddStoryCard';

export default function StoryIndex() {
  return (
    <div className='bg-[#242526] h-auto xl:hidden w-full'>
      <div className="bg-[#242526] w-full h-auto xl:hidden border-t-2 border-black flex overflow-hidden">
        <ScrollingCarousel show={3.1} slide={3} swiping={true}>
          <AddStoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
        </ScrollingCarousel>
      </div>
    </div>
  )
}
