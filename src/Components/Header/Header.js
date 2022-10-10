import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-sky-800 text-white '>
            <nav className='display: flex justify-between mx-12 py-6 '>
                <div className=' font-extrabold text-3xl'>
                    Quiz King
                </div>
                <div className=''>
                    <Link className='mr-5 text-xl' to='/Home'>Types</Link>
                    <Link className='mr-5 text-xl' to='/Statistics'>Statistics</Link>
                    <Link className='mr-5 text-xl' to='/Blog'>Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;