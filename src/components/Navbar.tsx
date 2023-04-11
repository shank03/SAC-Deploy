import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {

    const navGraph: [string, string][] = [
        ['Home', '/'],
        ['Clubs', '/clubs'],
        ['Events', '/events'],
        ['Achievements', '/achievements'],
        ['Team', '/team'],
    ]

    return (
        <div className="text-center text-white relative overflow-hidden bg-no-repeat bg-cover z-50">
            <nav className="flex bg-zinc-900 flex-col md:flex-row w-full fixed z-90 md:items-center justify-start md:justify-between md:flex-wrap p-4">
                <div className="flex flex-row justify-between">
                    <div className="flex items-center flex-shrink-0 mr-6">
                        <Link to='/'>
                            <span className="font-bold text-2xl md:text-2xl tracking-tight">SAC MNNIT</span>
                        </Link>
                    </div>

                    <div className="md:hidden flex justify-start">
                        <button className="outline-none mobile-menu-button">
                            <svg className="w-6 h-6 text-white hover:font-bold" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mobile-menu block h-screen md:h-auto content-center text-xl md:text-sm text-center md:flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="lg:flex-grow">
                        {
                            navGraph.map(([name, path]) => (
                                <Link to={path} className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold hover:animate-pulse mr-4 font-medium">
                                    {name}
                                </Link>
                            ))
                        }
                    </div>

                    <div>
                        <a href="/" className="inline-block text-sm px-4 py-2 leading-none font-medium border border-white rounded hover:border-transparent hover:bg-white hover:text-black mt-4 lg:mt-0 hover:animate-pulse">Admin Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
