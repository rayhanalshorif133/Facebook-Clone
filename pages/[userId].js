import React from 'react'

export default function userProfile({userId}) {
    return (
        <div>
            {userId}
        </div>
    )
}


export async function getServerSideProps(context) {
    const { params } = context;
    const userId = params.userId;
    console.log(userId);
    return {
        props: {
            userId: userId
        }
    }
}

