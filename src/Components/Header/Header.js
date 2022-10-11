import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-violet-800 px-12 text-white">
            <div className="navbar-start display: flex justify-between w-full ">
                <div>
                    <a className="btn btn-ghost normal-case text-xl text-4xl font-bold">Quiz King</a>
                </div>
                <div>
                    <div className="dropdown navbar-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-100">
                            <li className='font-bold text-black'><Link to='/home'>Topics</Link></li>
                            <li className='font-bold text-black'><Link to='/statistics'>Statistics</Link></li>
                            <li className='font-bold text-black'><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className=" navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 mr-10">
                    <li className='font-bold text-2xl'><Link to='home'>Topics</Link ></li>
                    <li className='font-bold text-2xl'><Link to='statistics'>Statistics</Link></li>
                    <li className='font-bold text-2xl'><Link to='blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;