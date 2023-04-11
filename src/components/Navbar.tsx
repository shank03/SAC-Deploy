import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {

    const [navbar, setNavbar] = React.useState(false)

    const navGraph: [string, string][] = [
        ['Home', '/'],
        ['Clubs', '/clubs'],
        ['Events', '/events'],
        ['Achievements', '/achievements'],
        ['Team', '/team'],
    ]

    return (
        <nav className="text-center text-white relative overflow-hidden bg-no-repeat bg-cover z-50">
            <div className="justify-between bg-zinc-900 px-4 mx-auto md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-4 md:py-4 md:block">
                        <NavLink to='/'>
                            <span className="font-bold text-2xl md:text-2xl tracking-tight">SAC MNNIT</span>
                        </NavLink>
                        <div className="md:hidden">
                            <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`flex-1 justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                    <ul className="items-center justify-center md:flex md:space-y-0 text-xl md:text-sm text-center">
                        {
                            navGraph.map(([name, path]) => (
                                <li className={`text-white hover:text-gray-200 ${navbar ? 'mt-4' : ''}`}>
                                    <NavLink to={path} className={`mt-4 lg:inline-block lg:mt-0 hover:font-bold hover:animate-pulse font-medium ${navbar ? '' : 'mr-4'}`} onClick={() => { if (navbar) setNavbar(!navbar) }}>
                                        {name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>

                    <div className={`mt-4 mb-4 w-full space-y-2 lg:hidden ${navbar ? '' : 'hidden'}`}>
                        <a href="/" className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
                            Admin Login
                        </a>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a href="/" className={`${navbar ? '' : ''} text-sm px-4 py-2 leading-none font-medium border border-white rounded hover:border-transparent hover:bg-white hover:text-black mt-4 lg:mt-0 hover:animate-pulse`}>
                        Admin Login
                    </a>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
