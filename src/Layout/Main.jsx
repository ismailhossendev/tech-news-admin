import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSideBar from '../components/AdminSideBar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = () => {
    return (
        <div className='bg-gray-300 min-h-screen relative'>
            <Header/>
            <div className="grid grid-cols-6 w-10/12 mx-auto gap-4">
                <div className=" h-fit"> <AdminSideBar/> </div>
                <div className="col-span-5 my-10">
                    <Outlet/>
                </div>
            </div>

            <footer className='absolute bottom-0 w-full'>
                <Footer/>
            </footer>
        </div>
    );
};

export default Main;