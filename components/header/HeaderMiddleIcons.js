
export default function HeaderMiddleIcons({ Icon, active = false }) {

    return (
      <div className={`h-13 pt-1 mt-1 px-[3.2rem] xl:px-[2.5rem] flex items-center cursor-pointer py-8  hover:bg-[#3A3B3C] text-gray-500  ${active ? 'border-b-4 border-blue-500' : 'rounded-xl mb-1 active:mb-0 active:rounded-none active:border-blue-500 active:border-b-4'}`}>
        <Icon className={`h-6 w-6 justify-center mt-[2rem] ${active && 'text-blue-500'}`} />
      </div>
    )
  }