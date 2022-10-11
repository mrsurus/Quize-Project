import React from 'react';
import  { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';


const Statistics = () => {
    const dataGet = useLoaderData()
    const data = dataGet.data
    return (
        <div className=' bg-sky-200 my-16 mx-8'>
           <LineChart width={500} height={400} data={data}>
           <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
           <Line type="monotone" dataKey="total" stroke="#82ca9d" />
           </LineChart>
        </div>
    );
};

export default Statistics;