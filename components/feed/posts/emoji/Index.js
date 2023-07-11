import React, { useContext, createContext, useEffect } from 'react'
import { emojiContext } from '../Post';
import SingleItem from './SingleItem';
import axios from 'axios';

export const tooltipContext = createContext({});

export default function Index() {

    const { setShowEmoji, handleRemoveReactEmoji } = useContext(emojiContext);
    const [emoji, setEmoji] = React.useState([]);


    const handleHoverEmoji = () => {
        setShowEmoji(true);
        handleRemoveReactEmoji(true);
    }
    const handleOnLeave = () => {
        setShowEmoji(true);
        handleRemoveReactEmoji(false);
    }



    useEffect(() => {
        axios.get('api/post/fetch-reaction-emojis')
            .then(res => {
                setEmoji(res.data.data);
            });
    }, []);


    return (
        <div className=''>
            <div className='absolute bg-transparent  w-[23.3rem] h-20 text-white bottom-0 mt-10'>
                <div className='flex justify-around items-center' onMouseEnter={handleHoverEmoji} onMouseLeave={handleOnLeave}>
                    {
                        emoji.length > 0 && emoji.map((item, index) => {
                            return (
                                <SingleItem key={index} index={index} title={item.title} image={item.image} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}