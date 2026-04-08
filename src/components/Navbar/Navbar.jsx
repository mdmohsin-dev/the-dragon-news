import React, { useContext } from 'react';
import { ImUser } from 'react-icons/im';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)


    const navLinks = <>
        <li><NavLink to="/category/1">Home</NavLink></li>
        <li><NavLink>About</NavLink></li>
        <li><NavLink>Career</NavLink></li>
        <li><NavLink>Contact Us</NavLink></li>
    </>

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure ?",
            text: "You want to logout",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
            }
        });
    }

    return (
        <div className='flex justify-between items-center mt-10'>
            {
                user ? <img className='w-14 h-14 rounded-full' src={user.photoURL} alt="" /> :
                    <ImUser size={40} className='border rounded-full'></ImUser>
            }
            <ul className='flex gap-10'>
                {navLinks}
            </ul>
            <div>
                {user ?
                    <button onClick={handleLogOut}
                        className='btn bg-primary text-white py-5 px-6'>Logout</button>
                    : <Link to="/login"
                        className='btn bg-primary text-white py-5 px-6'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;