import React from 'react'
import StoryCard from './StoryCard';
import { getSession,useSession  } from 'next-auth/react'





export default function Stories() {

  const { data: session, status } = useSession()

  const {email,name,image} = session?.user;


  const stories = [
    {
      id: 1,
      name: name,
      src: image,
      profile: image,
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
