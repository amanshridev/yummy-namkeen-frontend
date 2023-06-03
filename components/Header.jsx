import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState('tanslate-y-0');
    const [lastScrollY, setLastScrollY] = useState(0);

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FFAD01"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl text-red-500">Yummy Namkeen</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost">
                    <div>
                        <Icon icon="material-symbols:shopping-bag" color="#ffad01" className='w-6 h-6' />
                    </div>
                </button>
                <button className="btn btn-ghost">
                    <div className="indicator">
                        <Icon icon="ic:round-account-circle" color="#fe9400"  className='w-6 h-6' />
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>

    )
}

export default Header