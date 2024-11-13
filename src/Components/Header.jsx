import moment from 'moment';
import React from 'react';

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div >
                <img src="https://i.ibb.co.com/g3KYPjz/logo.png" className='w-[400px] h-[50px] mt-5' alt="" />
            </div>
            <h3 className='text-xl text-gray-500 py-5'>Journalism Without Fear or Favour</h3>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            
        </div>
    );
};

export default Header;