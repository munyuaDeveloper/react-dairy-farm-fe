import React from 'react';
import { FaUserCircle, } from 'react-icons/fa';
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';

const Navbar = ({ toggleSidebar }) => {

    const { logout, userDetails } = useAuth();
    
    return (
        <div className="flex shadow justify-between w-full px-5 py-5">
            <RiMenuUnfold4Fill className="text-sky-900 text-2xl cursor-pointer" onClick={toggleSidebar} />
            <div className="flex gap-5 text-sky-900 mr-10">
                <Link className="flex gap-1" to="/dashboard/profile"><FaUserCircle className="text-2xl" />{userDetails.profile.first_name}</Link>
                <Link onClick={logout}>Logout</Link>
            </div>
        </div>
    );
};

export default Navbar;