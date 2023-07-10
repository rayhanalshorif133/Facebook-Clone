import axios from 'axios';
import React from 'react'
import { emojiContext } from '../Post';
import { useSession } from 'next-auth/react';


export default function SingleItem({ index,title, image }) {



    const [tooltip, setTooltip] = React.useState(false);
    const {post,setReactInstantInfo,setShowEmoji} = React.useContext(emojiContext);
    const { data: session } = useSession();

    const handleTooltip = (e) => {
        setTooltip(true);
    }

    const handleTooltipLeave = (e) => {
        setTooltip(false);
    }

    const handlePostReactionCreate = () => {
        axios.post('api/post/reactions', {
            reactTitle: title,
            postId : post?._id,
            userEmail : session?.user?.email,
            action: 'setPostReaction'
        }).then((res) => {
            setReactInstantInfo(res.data.data);
            setShowEmoji(false);
            return false;
        });
    }


    return (
        <div onMouseEnter={handleTooltip} onMouseLeave={handleTooltipLeave}>
            {
                tooltip === true && <h3 className="text-white absolute z-10 bg-black justify-center items-center m-auto rounded-lg text-center top-0 px-2">{title}</h3>
            }
            <div className={`bg-gray-800 px-[7px] ${index == 1 && 'rounded-l-xl'} ${index == 7 && 'rounded-r-xl'}`} onClick={handlePostReactionCreate}>
                <img className='w-10 h-10 cursor-pointer hover:scale-110 mt-8' src={image} alt={title} />
            </div>
        </div>
    )
}