import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, total, logo, id } = topic
    return (
        <div className=' '>
            <div className="card card-side bg-gray-500 shadow-xl text-white ">
                <figure><img className='bg-black' src={logo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">{name}</h2>

                    <p>Total: {total}</p>
                    <Link to={`/topic/${id}`}>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary ">
                                 Start Quiz
                                <ArrowRightCircleIcon className="h-6 w-6 text-white-500" />
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;