import React, { createContext, useEffect } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import CancelPost from './cancelPost/Index';



export const emojiContext = createContext({});

export default function Post({ post }) {



    const { image, name } = post.author;
    const [cancelPost, setCancelPost] = React.useState(false);
    const [hoverOnEmoji, setHoverOnEmoji] = React.useState(false);
    const [reactInstantInfo, setReactInstantInfo] = React.useState(null);

    const handleCancelPost = () => {
        setCancelPost(true);
    }


    const [showEmoji, setShowEmoji] = React.useState(false);

    const handlePopupReactEmoji = (e) => {
        setShowEmoji(true);
        handleRemoveReactEmoji(true);
    }

    const handleRemoveReactEmoji = (status) => {
        setTimeout(() => {
            setShowEmoji(status);
        }, 2000);
    }


  



    const emojiContextValue = {
        handlePopupReactEmoji,
        handleRemoveReactEmoji,
        setShowEmoji,
        showEmoji,
        setHoverOnEmoji,
        hoverOnEmoji,
        post,
        setReactInstantInfo,
        reactInstantInfo,
    };

    return (
        <>
            {cancelPost ? <CancelPost post={post} /> :
                <div className='bg-[#242526] h-auto w-full rounded-xl mt-2'>
                    <emojiContext.Provider value={emojiContextValue} >
                        <Header image={image} name={name} cancelPost={handleCancelPost} />
                        <Body post={post} />
                        <Footer />
                    </emojiContext.Provider>
                </div>
            }
        </>
    )
}
