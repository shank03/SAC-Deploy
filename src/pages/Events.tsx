import React from 'react'
import { images } from '../images'

interface Post {
    title: string
    date: string
    content: string
    image: string
}

const Events: React.FC = () => {

    // - Keep the number of posts in odd number
    // - 0th index the main headline post
    // - 7 posts at max (is better to keep)
    const posts: Post[] = [
        {
            title: 'Culrav is almost here',
            date: 'April 4, 2023',
            content: `Say Konnichiwa to the brand new logo of Culrav '23.\n
                    The logo's vibrant colours and spectacular design perfectly encapsulate the spirit and essence of our forthcoming event.\n
                    Designed by: @mrrobot.psd`,
            image: images.culrav
        },
        {
            title: 'The Techfest - Avishkar',
            date: 'October 28, 2022',
            content: `Heya fams!\n
                    Avishkar, the most awaited techno-management fest of MNNIT Allahabad is right around the corner.
                    Every student must join our MS Teams Channel to stay updated.`,
            image: images.avishkar
        },
        {
            title: 'Annual Athletic Meet',
            date: 'January 18, 2023',
            content: `Hola amigos,\n
                    Let's discover our inner sportsmanship this month, as we under the honour
                    of SAC are here to acquit you unpack all your ground essentials and unleash the serene calibre in you.`,
            image: images.aanm
        },
        {
            title: 'Josh J Lal Memorial',
            date: 'January 23, 2021',
            content: `Mei ex aliquid eleifend forensibus,\n
                    quo ad dicta apeirian neglegentur, 
                    ex has tantas percipit perfecto. At per tempor albucius perfecto,
                    ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.`,
            image: images.football
        }
    ]

    return (
        <div>
            <section className="mt-20">
                <div className="d-flex text-center pt-0 text-3xl font-weight-900">
                    <h2>
                        <span className="font-bold text-2xl md:text-2xl tracking-tight">EVENTS</span>
                    </h2>
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
