import React from 'react'
import StoryCard from './StoryCard';

const stories = [
  {
    id: 1,
    name: "Rayhan Al Shorif",
    src: "https://rebrand.ly/ukck8ia",
    profile: "https://rebrand.ly/ukck8ia",
  },
  {
    id: 2,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    id: 3,
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/kxk",

  },{
    id: 4,
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },{
    id: 5,
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  }
];



export default function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto w-fit overflow-x'>
       {
          stories.map(story => 
            <StoryCard key={story.id} name={story.name} src={story.src} profile={story.profile} />
          )
       }
    </div>
  )
}
