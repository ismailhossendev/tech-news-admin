import React from 'react';
import {FaBan,FaEye} from 'react-icons/fa'
import {TiEdit} from 'react-icons/ti'
import { Link } from 'react-router-dom';
const AllPost = () => {
    return (
        <div className="overflow-x-auto w-full">
            <div className=" flex justify-between px-1 items-center">
                <h1 className="text-2xl font-semibold font-serif">Your All Post </h1>
                <Link to='/post/create' className='text-lg flex btn btn-primary my-2'><TiEdit className='text-3xl mb-1'/>Create Post</Link>
            </div>
            <table className="table w-full ">
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>VIew</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <button className='btn btn-info text-xl'><FaBan/></button>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Zemlak, Daniel and Leannon
                        <br/>
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td><FaEye className='inline mb-1' /> 400</td>
                        <th>
                        <Link to='/post/edit' className="btn btn-secondary btn-xs">edit</Link>
                        </th>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Time</th>
                        <th>VIew</th>
                        <th></th>
                    </tr>
                </tfoot>
                
            </table>
            </div>
    );
};

export default AllPost;