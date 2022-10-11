import React from 'react';
import { Radio } from "@material-tailwind/react";
import { Form } from 'react-router-dom';
import { Input } from 'postcss';

const QuizeDetails = ({option,ShowRightWorng,id}) => {
    return (
        <div>
             <div
                   
                    onClick={()=>ShowRightWorng(option)}
                    className="form-control border-2 rounded border-green-500 py-2 ">
                   
                    <label className="label cursor-pointer ">
                        <input type="radio" name={id}  className=" mx-2 radio radio-primary  checked:bg-blue-500" />
                     
                      <p className='mr-8'>{option}</p>
                    </label>
                   
                  </div>
        </div>
    );
};

export default QuizeDetails;