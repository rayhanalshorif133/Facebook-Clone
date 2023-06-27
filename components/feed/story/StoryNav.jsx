
export default function StoryNav({ Icon, title }) {
 return (
  <div className="flex items-center cursor-pointer w-12 sm:w-20 text-white m-5">
   <Icon className="h-6 w-6 ml-1" />
   <p className="text-white m-1">{title}</p>
  </div>
 )
}
