import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz
    const showAswer = () => {
        console.log(correctAnswer);
        alert ('wrong answer')
    }
    return (
        <div className=' my-7 mx-10 p-7 shadow-2xl relative'>
            <p>{question}</p>
            <EyeIcon onClick={showAswer} className="h-6 w-6 text-white-500 absolute left-7 top-5"></EyeIcon>
            <div className='display: grid grid-cols-2 gap-1 my-5'>
                {options.map(option =>

                    <div className=' border-2 border-green-500 py-2 '>
                        <input type="radio" name="radio-2" className=" mx-2 radio-primary" />
                        {option}
                    </div>)}

            </div>
        </div>
    );
};

export default Quiz;