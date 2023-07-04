import React from 'react'

export default function ShowLikesAndComments({number}) {

    // make a random number
    
    const emojis = ['angry','confused','cool','happy','laughing','like','love','lovely','party','sad','smile','thinking',
    'angry','confused','cool','happy','laughing','like','love','lovely','party','sad','smile','thinking',
    'angry','confused','cool','happy','laughing','like','love','lovely','party','sad','smile','thinking',
    'angry','confused','cool','happy','laughing','like','love','lovely','party','sad','smile','thinking',
    'angry','confused','cool','happy','laughing','like','love','lovely','party','sad','smile','thinking',
    'angry','confused','cool','happy','laughing','like','love','lovely','party','sad','smile','thinking',
    'angry','confused','cool','happy','laughing','like','love','lovely','party','sad','smile','thinking'
];

    // make a random emoji
    const emoji_1 = emojis[number + 1];
    const emoji_2 = emojis[number + 2];
    const emoji_3 = emojis[number + 3];
    const likes = number * 57;
    const comments = number * 43;


    return (
        <div className='flex justify-between border-b-1 border-gray-600'>
            <div className='flex'>
                <div className='flex m-2'>
                    <img className='h-5 w-5' src={`/assets/emoji/${emoji_1}.png`} alt='' />
                    <img className='h-5 w-5' src={`/assets/emoji/${emoji_2}.png`} alt='' />
                    <img className='h-5 w-5' src={`/assets/emoji/${emoji_3}.png`} alt='' />
                </div>
                <div className='ml-[1px] mt-[6px] text-gray-300'>
                    {likes}
                </div>
            </div>
            <div className='m-2 text-gray-300'>
                <span className="mr-1">{comments}</span>comments
            </div>
        </div>
    )
}
