import React from 'react';
import { Radio } from "@material-tailwind/react";
import { Form } from 'react-router-dom';
import { Input } from 'postcss';

const QuizeDetails = ({ option, ShowRightWorng, id }) => {
  
  return (
    <div>
      <div
        onClick={() => ShowRightWorng(option)}
        className="form-control  ">
        <label className=" hover:bg-green-200 label cursor-pointer border-2 rounded border-green-500  py-4">
          <input type="radio" name={id} className=" mx-2 radio radio-primary  checked:bg-blue-500" />
          <p className='mr-8'>{option}</p>
        </label>
      </div>
    </div>
  );
};

export default QuizeDetails;