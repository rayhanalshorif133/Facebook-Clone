import React from 'react'

export default function SingleItem({ title, image }) {


    const [tooltip, setTooltip] = React.useState(false);


    const handleTooltip = (e) => {
        setTooltip(true);
    }

    const handleTooltipLeave = (e) => {
        setTooltip(false);
    }

    {/*
    {
        tooltip === true && <h3 className="text-white bg-black justify-center items-center m-auto rounded-lg text-center mb-2">{title}</h3>
    }  
*/}

    return (
        <div onMouseEnter={handleTooltip} onMouseLeave={handleTooltipLeave}>
            {
                tooltip === true && <h3 className="text-white absolute z-10 bg-black justify-center items-center m-auto rounded-lg text-center top-0 px-2">{title}</h3>
            }
            <img className='w-10 h-10 cursor-pointer hover:scale-110 mt-8' src={image} alt={title} />
        </div>
    )
}
