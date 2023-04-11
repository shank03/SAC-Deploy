import React from 'react'
import { posts } from '../models/posts'

const Events: React.FC = () => {
    return (
        <div>
            <section className="mt-8">
                <div className="d-flex text-center pt-0 text-3xl font-weight-900">
                    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Events</h2>
                    <hr className="w-28 h-1 mx-auto my-2 bg-red-700 border-0 rounded" />
                </div>

                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 mt-4">
                    <a rel="noopener noreferrer" href="/" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                        <img src={posts[0].image} alt="" className="object-cover w-full h-96 rounded sm:h-96 lg:col-span-7" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{posts[0].title}</h3>
                            <span className="text-xs">{posts[0].date}</span>
                            <p>
                                {
                                    posts[0].content.split('\n').map((line, index) => (
                                        <span key={index}>{line}<br /></span>
                                    ))
                                }
                            </p>
                        </div>
                    </a>

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            posts.filter((post, index, it) => index !== 0).map((post, index) => (
                                <a rel="noopener noreferrer" href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
                                    <img role="presentation" className="object-cover w-full rounded h-1/2" src={post.image} alt='post_img' />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{post.title}</h3>
                                        <span className="text-xs">{post.date}</span>
                                        <p>
                                            {
                                                post.content.split('\n').map((line, index) => (
                                                    <span key={index}>{line}<br /></span>
                                                ))
                                            }
                                        </p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Events
