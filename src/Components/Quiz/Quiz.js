import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Swal from 'sweetalert2'
import QuizeDetails from '../QuizeDetails/QuizeDetails';



const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer, id } = quiz

    const showAswer = () => {
        Swal.fire(`The correct answer is:-

         ${correctAnswer}`)
    }

    const ShowRightWorng = (option) => {
        const clickedOption = option
        if (clickedOption === correctAnswer) {
            Swal.fire(
                'Congratulattion!',
                'You answer is right!',
                'success'
            )
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Answer!',
            })
        }
    }
    return (
        <div className=' my-7 mx-10 p-7 shadow-2xl relative'>
            <p className='text-2xl font-medium mt-7'>{question}</p>
            <EyeIcon onClick={showAswer} className="h-6 w-6 text-white-500 absolute left-7 top-5"></EyeIcon>

            <div className=' display: grid grid-cols-1 md:grid-cols-2  xl:gap-8 gap-3 my-5'>
                {options.map(option => <QuizeDetails
                    key={option}
                    ShowRightWorng={ShowRightWorng}
                    id={id}
                    option={option}>
                </QuizeDetails>
                )}

            </div>
        </div>
    );
};

export default Quiz;