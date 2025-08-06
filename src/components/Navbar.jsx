import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5 bg-slate-400 text-white font-bold">
      <p>Logo</p>
      <div className="flex items-center justify-between gap-6">
        <ul className="flex items-center justify-between gap-4 cursor-pointer">
          <Link to={'/'}>
            <li className="hover:underline">Home</li>
          </Link>
          <Link to={'/product'}>
            <li className="hover:underline">Products</li>
          </Link>
          <Link to={'/about'}>
            <li className="hover:underline">About</li>
          </Link>
          <Link to={'/contact'}>
            <li className="hover:underline">Contact</li>
          </Link>
        </ul>
        <Link to={"/login"}>
          <button className="bg-slate-600 px-5 py-2 rounded-md cursor-pointer hover:bg-slate-700">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
