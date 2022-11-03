import React from 'react';
import { FaHome,FaFolderOpen ,FaRegComments,FaSignOutAlt} from "react-icons/fa";
import {TiEdit} from 'react-icons/ti'
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div className="flex flex-col h-full p-3  bg-gray-900 text-gray-100 my-10 rounded-xl">
            <div className="space-y-3" >
                <div className="flex items-center justify-between" >
                    <h2>Dashboard</h2>
                    <button className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-100">
                            <rect width="352" height="32" x="80" y="96"></rect>
                            <rect width="352" height="32" x="80" y="240"></rect>
                            <rect width="352" height="32" x="80" y="384"></rect>
                        </svg>
                    </button>
                </div>
                <div className="relative" >
                    <span className="absolute inset-y-0 left-0 flex items-center py-4">
                        <button type="submit" className="p-2 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 text-gray-400">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm border-transparent rounded-md focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900" />
                </div>
                <div className="flex-1" >
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <Link to='/' className="flex gap-2 text-base items-center p-2 space-x-3 rounded-md"> <FaHome/> Home</Link>
                        </li>
                        <li className="rounded-sm">
                            <Link to='/posts' className="flex gap-2 text-base items-center p-2 space-x-3 rounded-md"> <FaFolderOpen/> Posts</Link>
                        </li>
                        <li className="rounded-sm">
                            <Link className="flex gap-2 text-base items-center p-2 space-x-3 rounded-md"> <FaRegComments/> Comments</Link>
                        </li>
                        <li className="rounded-sm">
                            <Link className="flex gap-2 text-base items-center p-2 space-x-3 rounded-md"> <FaSignOutAlt/> SignOut</Link>
                        </li>
                        <li className="rounded-sm">
                            <Link to='/post/create' className="flex gap-2 text-base items-center p-2 space-x-3 rounded-md"> <TiEdit/> Create Post</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center p-2 mt-6 space-x-4 justify-self-end" >
                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-lg bg-gray-500" />
                <div >
                    <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                    <span className="flex items-center space-x-1">
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">View profile</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AdminSideBar;