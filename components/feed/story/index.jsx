import React from 'react'
import Image from 'next/image'
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';
import StoryCard from './StoryCard';
import AddStoryCard from './AddStoryCard';

export default function StoryIndex() {
  return (
    <div className='bg-[#242526] h-auto w-full'>
      <div className="bg-[#242526] w-full h-auto border-t-2 border-black xl:border-t-0 xl:border-none flex overflow-hidden">
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
