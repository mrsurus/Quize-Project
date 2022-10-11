import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topics/Topic';

const Home = () => {
    const topicsData = useLoaderData()
    const topics = topicsData.data
    return (
        <div>
            <div className='text-center'>
                <p className='text-3xl bg-green-500 my-3 mx-8 rounded py-4'>Play Quiz and win award.</p>
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