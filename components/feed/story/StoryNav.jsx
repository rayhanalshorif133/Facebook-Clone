
export default function StoryNav({ Icon, title, isActive = false }) {
    return (
        <div className={`flex items-center justify-center mx-auto cursor-pointer 2xl:w-full 2xl:mt-5 sm:w-20 m-5 ${isActive? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-400'} `}>
            <Icon className="h-6 w-6 ml-1 mb-4" />
            <p className="font-bold ml-1 mb-4">{title}</p>
        </div>
    )
}
