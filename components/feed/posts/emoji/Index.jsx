import React, { useContext, createContext } from 'react'
import { emojiContext } from '../Post';
import SingleItem from './SingleItem';

export const tooltipContext = createContext({});

export default function Index() {

    const { setShowEmoji, handleRemoveReactEmoji } = useContext(emojiContext);
    const [tooltip, setTooltip] = React.useState('');
    const [marginLeft, setMarginLeft] = React.useState(3);

    const marginLeftValue = 3;

    const handleHoverEmoji = () => {
        setShowEmoji(true);
        handleRemoveReactEmoji(true);
    }
    const handleOnLeave = () => {
        setShowEmoji(true);
        handleRemoveReactEmoji(false);
    }

    const handleTooltip = (e) => {
        console.log(e.target.dataset.ml);
        setMarginLeft(e.target.dataset.ml);
        setTooltip(e.target.alt);
    }


    return (
        <div className=''>
            <div className='absolute bg-transparent  w-[23.3rem] h-20 text-white bottom-0 mt-10'>
                <div className='flex justify-around items-center bg-gray-800 rounded-2xl' onMouseEnter={handleHoverEmoji} onMouseLeave={handleOnLeave}>
                    <tooltipContext.Provider value={{handleTooltip}}>
                        <SingleItem title='like' image='assets/emoji/fb-emoji/like.png' />
                        <SingleItem title='love' image='assets/emoji/fb-emoji/love.png' ml="7rem"/>
                        <SingleItem title='care' image='assets/emoji/fb-emoji/care.png' ml="10rem"/>
                        <SingleItem title='haha' image='assets/emoji/fb-emoji/haha.png' ml="10.2rem"/>
                        <SingleItem title='wow' image='assets/emoji/fb-emoji/wow.png' ml="10rem"/>
                        <SingleItem title='sad' image='assets/emoji/fb-emoji/sad.png' ml="10rem"/>
                        <SingleItem title='angry' image='assets/emoji/fb-emoji/angry.png' ml="10rem"/>
                    </tooltipContext.Provider>
                </div>
            </div>
        </div>
    )
}
