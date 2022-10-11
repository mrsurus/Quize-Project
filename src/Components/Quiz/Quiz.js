import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Swal from 'sweetalert2'



const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz

    const showAswer = () => {
        Swal.fire(`The correct answer is:-

         ${correctAnswer}`)
    }

    const ShowRightWorng=(option)=>{
            const clickedOption = option
            if(clickedOption === correctAnswer){
                Swal.fire(
                    'Congratulattion!',
                    'You answer is right!',
                    'success'
                  )
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong Answer!',
                  })
            }
    }
    return (
        <div className=' my-7 mx-10 p-7 shadow-2xl relative'>
            <p className='text-2xl font-bold'>{question}</p>
            <EyeIcon onClick={showAswer} className="h-6 w-6 text-white-500 absolute left-7 top-5"></EyeIcon>
            
            <div className='display: grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 my-5'>
                {options.map(option =>
                    <div 
                    key={option.slice(2)}
                    onClick={()=>ShowRightWorng(option)}
                    className="form-control border-2 rounded border-green-500 py-2 ">
                    <label className="label cursor-pointer ">
                      <input type="radio" name="radio-2" className=" mx-2 radio radio-primary checked:bg-blue-500" />
                      <p className='mr-8'>{option}</p>
                    </label>
                  </div>
                  
                    )}

            </div>
        </div>
    );
};

export default Quiz;