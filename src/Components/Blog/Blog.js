import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border-2 border-green-500 m-10 p-8 rounded-md'>
                <h3 className='text-3xl font-bold mb-3'>What is the purpose of react router?</h3>
                <p>React Router enables the navigation among views of various components in a React Application, allows 
                    changing the browser URL, and keeps the UI in sync with the URL.If any application contain three component the we can
                 visit every component without reload the page by using react router.</p>
            </div>
            <div className='border-2 border-green-500 m-10 p-8 rounded-md'>
                <p className='text-3xl font-bold mb-3'>How does contex API work?</p>
                <p>The context API is a component structure provided by the react framework.By context API we can produce global variables that can pass around.Context api is the alternative of
                    "prop drilling" or passing props from grandparent to child to parent.It is easy to use .You can recive any specefic data from everwhere you want.
                </p>
            </div>
            <div className='border-2 border-green-500 m-10 p-8 rounded-md'>
                <p className='text-3xl font-bold mb-3'>What is useHerp hook in react?</p>
                <p>The useRef Snare permits you to endure values between renders.
                    It very well may be utilized to store a changeable worth that doesn't cause a re-render when refreshed.
                    It very well may be utilized to straightforwardly get to a DOM component.The it Snare is a capability that profits a variable ref object whose .current property is introduced with the passed contention . 
                    The returned article will persevere for the full lifetime of the part.</p>
            </div>
            
        </div>
    );
};

export default Blog;