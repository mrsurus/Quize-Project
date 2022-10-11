import React from 'react';
import { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';


const Statistics = () => {
    const dataGet = useLoaderData()
    const data = dataGet.data


    return (
        <div>
            <ResponsiveContainer   width="100%" height="100">
                    <div className='mt-16 bg-green-500'>
                <LineChart width={500}  height={400}  data={data}
                 margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
                    </div>
            </ResponsiveContainer>
        </div>
    );
};
export default Statistics;