import { useState } from "react";
import LoginForm from "./LoginForm";

const Navbar = ({ setCurrentTab }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [userLogin, setUserLogin] = useState(false)

    const userLoginForm = () => {
        setUserLogin(!userLogin)
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between py-1 items-center">
                <div className="text-white text-xl font-bold flex justify-center items-center">
                <img src="https://i.ibb.co.com/cCd4Brf/it-club-removebg-preview.png" alt="" className="md:w-14 w-10 rounded-full"/>It Club
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <i className="fa-regular fa-circle-xmark"></i> : <i className="fa-solid fa-bars-staggered"></i>}
                    </button>
                </div>

                {/* Menu Items (Desktop) */}
                <div className={`hidden lg:flex space-x-8`}>
                    <a href="#home" onClick={() => setCurrentTab('home')} className="text-gray-300 hover:text-white">Home</a>
                    <a href="#about" onClick={() => setCurrentTab('about')} className="text-gray-300 hover:text-white">About Us</a>
                    <a href="#events" onClick={() => setCurrentTab('events')} className="text-gray-300 hover:text-white">Events</a>
                    <a href="#blogs" onClick={() => setCurrentTab('blogs')} className="text-gray-300 hover:text-white">Blog</a>
                    <a href="#notice" onClick={() => setCurrentTab('notice')} className="text-gray-300 hover:text-white">Notice</a>
                    <a href="#projects" onClick={() => setCurrentTab('projects')} className="text-gray-300 hover:text-white">Projects</a>
                    <a href="#join" onClick={() => setCurrentTab('join')} className="text-gray-300 hover:text-white">Join Us</a>
                    <a href="#contact" onClick={() => setCurrentTab('contact')} className="text-gray-300 hover:text-white">Contact Us</a>
                </div>

                {/* User Icon (Visible only on larger screens) */}
                <div onClick={userLoginForm} className="hidden lg:block text-white cursor-pointer">
                    <i className="fa-solid fa-user"></i>
                </div>

            </div>

            {userLogin && <LoginForm onClose={userLoginForm}></LoginForm>}

            {/* Dropdown for mobile */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <div className="absolute right-0 mt-5 w-48 bg-gray-800 rounded-lg shadow-lg m-2 z-20">
                    <ul className="flex flex-col space-y-2 p-4">
                        <li>
                            <a href="#home" onClick={() => setCurrentTab('home')} className="text-gray-300 hover:text-white">Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setCurrentTab('about')} className="text-gray-300 hover:text-white">About Us</a>
                        </li>
                        <li>
                            <a href="#events" onClick={() => setCurrentTab('events')} className="text-gray-300 hover:text-white">Events</a>
                        </li>
                        <li>
                            <a href="#blogs" onClick={() => setCurrentTab('blogs')} className="text-gray-300 hover:text-white">Blog</a>
                        </li>
                        <li>
                            <a href="#notice" onClick={() => setCurrentTab('notice')} className="text-gray-300 hover:text-white">Notice</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => setCurrentTab('projects')} className="text-gray-300 hover:text-white">Projects</a>
                        </li>
                        <li>
                            <a href="#join" onClick={() => setCurrentTab('join')} className="text-gray-300 hover:text-white">Join Us</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setCurrentTab('contact')} className="text-gray-300 hover:text-white">Contact Us</a>
                        </li>
                        <li>
                            <div onClick={userLoginForm} className="text-gray-300 hover:text-white cursor-pointer">
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
