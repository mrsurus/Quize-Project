import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const data = useLoaderData()
    const quizs = data.data.questions

    return (
        <div>
            <div className='text-center'>
                {
                    quizs.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}></Quiz>)
                }
            </div>

        </div>
    );
};

export default Quizs;