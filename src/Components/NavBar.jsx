import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="text-[#706F6F] space-x-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>

            </div>
            <div className="flex gap-3 items-center justify-between">
                
                <div className="">
                    <img src="https://i.ibb.co.com/QHt1khS/user.png" alt="" />
                    
                </div>
                <button className='btn bg-[#403F3F] text-white p-3 '>Login</button>

            </div>
        </div>
    );
};

export default NavBar;