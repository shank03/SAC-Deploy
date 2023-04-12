import React from 'react'
import { Link } from 'react-router-dom'

const Error: React.FC = () => {
    return (
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
                <div>
                    <p className="mb-2 text-s font-semibold tracking-wide text-gray-500 uppercase">Error 404</p>
                    <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">Oops! The page you're looking for isn't here.</h1>
                    <p className="mb-8 text-base text-left text-gray-800 md:text-xl">You might have the wrong address, or the page may have moved.</p>
                    <Link to="/" className="w-full mb-2 btn rounded-lg bg-zinc-900 text-white p-4 sm:w-auto sm:mb-0">Back to homepage</Link>
                </div>
                <div className="w-full h-full rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Error
