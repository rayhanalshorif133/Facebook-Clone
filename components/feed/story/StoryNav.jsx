
export default function StoryNav({ Icon, title, isActiveStatus = false, clickAbleToggle }) {
    return (
        <div onClick={clickAbleToggle} className={`flex items-center justify-center mx-auto cursor-pointer 2xl:w-full 2xl:mt-2 sm:w-20 m-5 ${isActiveStatus? 'border-b-3 border-blue-500 text-blue-500 2xl:mt-5' : 'text-gray-400 hover:bg-[#3A3B3C] pt-4 rounded-xl'} `}>
            <Icon className="h-6 w-6 ml-1 mb-4" />
            <p className="font-bold ml-1 mb-4">{title}</p>
        </div>
    )
}
