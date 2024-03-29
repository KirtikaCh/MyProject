import React, { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import img from './images/logo4.png'
import Login from './Login';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [model, setModel] = useState(false);

    return (
        <>
            <nav className="bg-black p-4">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="logo text-[#43591a] text-xl font-bold">
                                <img src={img} alt="logo" width="200px" height="auto"/>
                            </div>
                            <div className="ml-4 hidden md:block">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="px-5 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white border border-[#43591a] w-96"
                                />
                                <button className="bg-[#43591a] font-medium text-white px-5 py-3 ml-2 rounded-md">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <button onClick={() => setModel((ind) => !ind)} className="text-white px-5 py-3 font-medium bg-[#43591a] rounded-md hover:bg-white hover:text-[#43591a] transition duration-300 ease-in-out">Sign in</button>
                            </div>
                            <div className="md:hidden">
                                <button className="text-white" onClick={toggleMenu}>
                                    <HiMenuAlt1 className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {menuOpen && (
                <div className="bg-black text-white py-2 px-4 md:hidden">
                    <div className="flex items-center">
                        <div className="w-3/4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white border border-gray-300 w-full"
                            />
                        </div>
                        <div className="w-1/4 pl-2">
                            <button className="bg-[#43591a] text-white px-4 py-2 rounded-md w-full">
                                Search
                            </button>
                        </div>
                    </div>
                    <button className="block text-left w-full py-2 mt-2 bg-[#43591a] rounded-md hover:bg-white hover:text-[#43591a] transition duration-300 ease-in-out">Sign in</button>
                </div>
            )}

            {model ? <Login onClick={setModel}/> : ""}
        </>
    );
};

export default Header;