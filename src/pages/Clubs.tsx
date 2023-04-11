import React from 'react'
import { clubsInfo } from '../models/clubs'

const Clubs: React.FC = () => {
    return (
        <div>
            {
                clubsInfo.map((category) => (
                    <div className="py-12 mt-12">
                        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                            <div className="mb-12 space-y-2 text-center">
                                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">{category.name}</h2>
                                <hr className="w-28 h-1 mx-auto my-2 bg-red-700 border-0 rounded" />
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    category.clubs.map((club) => (
                                        <div className='group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
                                            <div className='relative overflow-hidden rounded-xl'>
                                                <img src={club.image} alt='art cover' loading='lazy' className='h-full w-full object-cover object-top transition duration-500 group-hover:scale-105' />
                                            </div>
                                            <div className='mt-6 relative'>
                                                <h3 className='text-2xl font-semibold text-gray-800'>
                                                    {club.name}
                                                </h3>
                                                <p className='mt-6 mb-8 text-gray-600'>
                                                    {club.description}
                                                </p>
                                                <a className='inline-block' href='/clubs'>
                                                    <span className='text-primary text-red-700'>Read More</span>
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Clubs