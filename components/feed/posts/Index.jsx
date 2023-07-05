import React, { useEffect, useState } from 'react'
import Post from './Post';
import axios from 'axios';

export default function Index() {

    const countOfPost = 20;
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios.get('/api/post/get').then((res) => {
            setPosts(res.data.data);
        })
    }, []);

    useEffect(() => {

        const interval= 3000;
        
        setInterval(() => {
            axios.get('/api/post/get').then((res) => {
                setPosts(res.data.data);
            })
        }, interval);

    }, []);

    return (
        <div className=''>
            {
                posts.length > 0 && posts.map((item) =>
                    <Post key={item._id} post={item} />
                )
            }
        </div>
    )
}
