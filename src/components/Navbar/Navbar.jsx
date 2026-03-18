import React from 'react';
import { ImUser } from 'react-icons/im';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/category/1">Home</NavLink></li>
        <li><NavLink>About</NavLink></li>
        <li><NavLink>Career</NavLink></li>
        <li><NavLink>Contact Us</NavLink></li>
    </>

    return (
        <div className='flex justify-between items-center mt-10'>
            <ImUser size={40} className='border rounded-full'></ImUser>
            <ul className='flex gap-10'>
                {navLinks}
            </ul>
            <Link to="/login"
            className='btn bg-primary text-white py-5 px-6'>Login</Link>
        </div>
    );
};

export default Navbar;