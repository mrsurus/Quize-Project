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
            <div className='  display: flex text-white bg-violet-500 my-3 mx-8 rounded mt-16 py-4 items-center '>
                <div className='w-1/2 '>
                    <img className='w-1/3 ml-24 ' src={pic} alt="" />
                </div>
               <div className='w-1/2 text-center'> 
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