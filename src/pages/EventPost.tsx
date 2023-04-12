import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../models/posts'
import Error from './Error';

const EventPost: React.FC = () => {

    let { id } = useParams();
    if (!id) id = '0';

    const postID = Number(id);
    if (isNaN(postID) || postID >= posts.length) {
        return <Error />;
    }

    const post = posts[postID];
    return (
        <article className="px-4 py-12 mx-auto max-w-7xl">
            <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
                <img src={post.image} className="object-cover w-full bg-center rounded-lg post_img" alt="post_img" />
                {/* <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">Development</p> */}
                <h1 className="mt-7 mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                    {post.title}
                </h1>
                {/* <div className="flex mb-6 space-x-2">
                    <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">CSS</a>
                    <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">Tailwind</a>
                    <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">AlpineJS</a>
                </div> */}
                {/* <a className="flex items-center text-gray-700" href="#">
                    <div className="avatar"><img src="/placeholder.jpg" alt="Photo of Praveen Juge" /></div>
                    <div className="ml-2">
                        <p className="text-sm font-semibold text-gray-800">Praveen Juge</p>
                        <p className="text-sm text-gray-500">Jan 02 2021</p>
                    </div>
                </a> */}
            </div>

            <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
                <p>
                    {
                        post.content.split('\n').map((line, index) => (
                            <span key={index}>{line}<br /></span>
                        ))
                    }
                </p>
            </div>
        </article>

    )
}

export default EventPost
