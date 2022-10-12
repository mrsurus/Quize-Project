import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topics/Topic';
import pic from '../images/pic.png'
import { HeartIcon } from '@heroicons/react/24/solid';

const Home = () => {
    const topicsData = useLoaderData()
    const topics = topicsData.data
    return (
        <div>
            <div className=' p-2  display: grid md:grid-cols-2   text-white bg-violet-500 my-3 mx-8 rounded mt-16 py-4 items-center '>
                <div className='sm:w-1/2 w-full '>
                    <img className='w-full  ml-0 md:ml-24 h-44 sm:w-3/4' src={pic} alt="" />
                </div>
               <div className='w-full text-center md:w-1/2 my-16 sm:my-0 '> 
                    <p className='text-3xl content-center'>Play Quiz and win award</p>
               </div>
            </div>
            <div className='display  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 mx-8 my-24'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}>
                    </Topic>)
                }
            </div>

        </div>


    );
};

export default Home;