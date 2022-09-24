import logo from '../../images/Logo.svg'
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral shadow-md lg:px-20">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-white hover:text-warning active:bg-warning'><a href='/'>Order</a></li>
                        <li className='text-white hover:text-warning active:bg-warning'><a href='/'>Order Review</a></li>
                        <li className='text-white hover:text-warning active:bg-warning'><a href='/'>Manage Inventory</a></li>
                        <li className='text-white hover:text-warning active:bg-warning'><a href='/'>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;