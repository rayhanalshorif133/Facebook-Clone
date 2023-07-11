import axios from 'axios';
import React, { useEffect } from 'react'
import { emojiContext } from '../Post';

export default function ShowLikesAndComments({ number}) {

    // make a random number

    const { post,reactInstantInfo } = React.useContext(emojiContext);
    const [likes, setLikes] = React.useState(0);
    const [emojis, setEmojis] = React.useState([]);

    // make a random emoji
    const comments = number * 2;

    useEffect(() => {
        axios.post('api/post/reactions', {
            action: 'getPostReactInfo',
            postId: post?._id
        })
            .then(res => {
                const data = res.data.data;
                setLikes(data?.length);

                setEmojis([]);
                data.map((item, index) => {
                    setEmojis(prev => [...prev, item.react]);
                });
                // remove duplicate
                setEmojis(prev => [...new Set(prev)]);
            });
    }, [reactInstantInfo]);


    return (
        <div key={post?._id} className='flex justify-between border-b-1 border-gray-600'>
            <div className='flex'>
                {
                    likes > 0 &&
                    <>
                        <div className='flex m-2'>
                            {
                                emojis.length > 0 && emojis.map((item, index) => {
                                    return (
                                        index < 3 && <img className='h-5 w-5' src={`/assets/emoji/${item}.png`} alt='' />
                                    )
                                })
                            }
                        </div>
                        <div className='ml-[1px] mt-[6px] text-gray-300'>
                            {likes}
                        </div>
                    </>
                }
            </div>
            <div className='m-2 text-gray-300'>
                <span className="mr-1">{comments}</span>comments
            </div>
        </div>
    )
}