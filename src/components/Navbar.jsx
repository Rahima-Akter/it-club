import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between py-1 items-center">
                {/* Logo */}
                <div className="text-white text-xl font-bold">
                    It Club
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <i className="fa-regular fa-circle-xmark"></i> : <i className="fa-solid fa-bars-staggered"></i>}
                    </button>
                </div>

                {/* Menu Items (Desktop) */}
                <div className={`hidden lg:flex space-x-8`}>
                    <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white">About Us</a>
                    <a href="#" className="text-gray-300 hover:text-white">Events</a>
                    <a href="#" className="text-gray-300 hover:text-white">Blog</a>
                    <a href="#" className="text-gray-300 hover:text-white">Notice</a>
                    <a href="#" className="text-gray-300 hover:text-white">Projects</a>
                    <a href="#" className="text-gray-300 hover:text-white">Join Us</a>
                    <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
                </div>

                {/* User Icon (Visible only on larger screens) */}
                <div className="hidden lg:block text-white">
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>

            {/* Dropdown for mobile */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <div className="absolute right-0 mt-5 w-48 bg-gray-800 rounded-lg shadow-lg m-2 z-10"> {/* Added m-2 for margin */}
                    <ul className="flex flex-col space-y-2 p-4">
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Events</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Blog/News</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Notice</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Join Us</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
                        </li>
                        <li>
                            {/* User Icon in dropdown */}
                            <div className="text-gray-300 hover:text-white">
                                <i className="fa-solid fa-user"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
