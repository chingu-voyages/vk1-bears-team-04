import React from 'react';
import { Link } from "react-router-dom";
import { Dashboard } from "../NavPages";
import { BsListTask } from "react-icons/bs";
import { MdCallEnd } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";

const MainDashboard = () => {
    return (
        <>
            <div className="grid sm:grid-cols-12 grid-cols-1 overflow-auto overscroll-contain">
                <div className="col-span-2 sticky top-0 z-50">

                    {/* sidebar menu */}
                    <div className="sm:h-screen h-full text-center bg-gray-900 sm:pb-96 pb-0 flex flex-row sm:flex-col justify-around sm:justify-start">
                        
                        <Link to="/main" className="sm:bg-gray-700  py-3 cursor-pointer text-blue-300 flex gap-2 flex-wrap sm:gap-2 justify-start px-2"><RiAccountBoxFill className="text-blue-300 text-2xl" /><div className="sm:block ">Dashboard</div></Link> 

                        <Link to="/firstmenu" className="hover:text-blue-300 py-3 cursor-pointer text-white sm:text-white flex gap-2 flex-wrap sm:gap-2 justify-start px-2"><BsListTask className=" text-white text-2xl"/><div className="sm:block ">Rescue Logs</div></Link>

                        <Link to="/secondmenu" className="py-3 cursor-pointer text-white  hover:text-blue-300 flex gap-2 flex-wrap sm:gap-2 justify-start px-2"><MdCallEnd className=" text-white text-2xl" /><div className="sm:block ">Hotlines</div></Link>   

                    </div>
                </div>

                <div className="h-screen col-span-10">
                    <Dashboard />
                </div>

            </div>
        </>
    )
}

export default MainDashboard;
