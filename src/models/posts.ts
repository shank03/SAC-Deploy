import { images } from "./images";

interface Post {
    title: string
    date: string
    content: string
    image: string
}

// - Keep the number of posts in odd number
// - 0th index the main headline post
// - 7 posts at max (is better to keep)
export const posts: Post[] = [
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
];
