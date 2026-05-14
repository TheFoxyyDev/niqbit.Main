/* eslint-disable no-unused-vars */
import AuthToggle from "./AuthToggle.jsx";
import { motion } from 'framer-motion';
import { Link, useLocation } from "react-router";

const links = [
    { label: 'home', path: '/' },
    { label: 'projects', path: '/projects' },
    { label: 'games', path: '/games' },
    { label: 'about', path: '/about' },
];

function NavBar() {
    const { pathname } = useLocation();

    return (
        <>
            <div className="fixed w-full h-20 bg-[#0D1017] border-b-[0.5px] border-b-[#1E2530] flex justify-between items-center p-3 pl-10 pr-10 z-10">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="relative h-full w-auto text-white font-mono text-center text-3xl flex justify-center items-center cursor-pointer"
                >
                    niq<span className="text-defgreen">bit</span>
                    <Link to="/" className="absolute w-full h-full" />
                </motion.button>

                <div className="relative h-full w-auto text-lg font-mono flex justify-center items-center">
                    {links.map((link) => (
                        <motion.button
                            key={link.path}
                            animate={{ scale: pathname === link.path ? 1.1 : 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className={`relative h-full w-auto p-3 flex justify-center items-center text-center cursor-pointer ${
                                pathname === link.path ? 'text-white' : 'text-[#6B7A8D]'
                            }`}
                        >
                            {link.label}
                            <Link to={link.path} className="absolute w-full h-full" />
                        </motion.button>
                    ))}
                </div>

                <AuthToggle />
            </div>
        </>
    );
}

export default NavBar;