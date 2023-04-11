import { images } from '../models/images'

interface Club {
    name: string,
    description: string,
    image: string
}

interface Category {
    name: string,
    clubs: Club[]
}

export const clubsInfo: Category[] = [
    {
        name: "Technical Clubs",
        clubs: [
            {
                name: "Computer Coding Club",
                description: `We host several events in the domain of Computer Science And
                        Engineering for which we also conduct classes on regular basis.
                        Students from various courses actively participate in these 
                        events and classes throughout the year.`,
                image: images.cc
            },
            {
                name: "Robotics Club",
                description: `Robotics Club MNNIT is a diverse group of robotics enthusiasts 
                        from all the college departments.We are mainly concerned with building robots for academic 
                        purposes, competing at national events, or even building just
                        out of imagination.`,
                image: images.roboclub
            },
            {
                name: "Aeroclub",
                description: `Aero Club MNNIT is a diverse group of aero-science enthusiasts
                        from all the college departments.We are mainly concerned with aeronautical studies for
                        academic purposes, competing at national events, or even building
                        just out of imagination.`,
                image: images.aeroclub
            },
            {
                name: "Astro Club",
                description: `Astro Club MNNIT is a diverse group of astronomy enthusiasts
                        from all the college departments.We are mainly concerned with astronomy for
                        academic purposes, competing at national events, or even building
                        just out of imagination.`,
                image: images.astroclub
            }
        ]
    },
    {
        name: "Sports Club",
        clubs: [
            {
                name: "Cricket Club",
                description: `Elite MNNIT Cricket Team
                        Inter NIT Champions: 2019, 2022
                        Asmita Champions: 2019`,
                image: images.cricket
            },
            {
                name: "Chess Club",
                description: "We play and promote Chess and events.",
                image: images.chess
            },
            {
                name: "Table Tennis Club",
                description: `Table tennis is a popular indoor sport that requires quick-response movements 
                        as well as agility.It's a fast-paced game that requires agility and stamina 
                        in a small range of motion.`,
                image: images.tt
            },
            {
                name: "Lawn Tennis Club",
                description: `awn Tennis college team. We participate in various tournaments
                            like Inter NIT, Spardha(IIT BHU ssports fest), etc representing MNNIT.`,
                image: images.lawn_tennis
            },
            {
                name: "Kabaddi Club",
                description: `Welcome to the Kabaddi Club.
                            Kabaddi club works in development of sportsmanship and team spirit in the 
                            students of our college.Our teams practice regularly for upcoming tournaments.`,
                image: images.kabaddi
            },
            {
                name: "Skating Club",
                description: `Skating club is a club that brings together individuals who share a passion for skating.
                        The club provides a space for members to learn new skills and participate in various skating- related activities.`,
                image: images.skating
            },
            {
                name: "Basketball Club",
                description: `'Sportsmanship is not just a skill but an epitome of lifestyle built with discipline', 
                        and that's the spirit that the MNNIT BASKETBALL CLUB carries with it. Our club is open to 
                        each and every memeber of MNNIT who have a passion for the game and an addiction to competitiveness.`,
                image: images.basketball
            },
            {
                name: "Football Club",
                description: `The MNNIT Football team also known as MNNIT FC, is the official football team of Motilal Nehru National Institute Of Technology Allahabad. 
                        It stays active throughout the year and training is done under the supervision of national level coaches.`,
                image: images.football
            }
        ]
    },
    {
        name: "Cultural Clubs",
        clubs: [
            {
                name: "Literary Club",
                description: `'A word after a word after a word is power.'
                        In the words of Atwood, literature is power, a formidable force to be reckoned. 
                        At Literary Club, MNNIT, we endeavor to inspire thoughts that instill action through discourse.`,
                image: images.literary
            },
            {
                name: "Quintessence",
                description: "It is a dramatics which perform nukkad natak, stage play, hasyamanch, monos, duets, and lot other drama activities but apart from that it is not restricted to recruit just actors, it has a aim which is DRAMATICS FOR ALL means If you are a singer, instrumentalist, actor, writer or an amalgam of all these, this is right club to join.",
                image: images.drams
            },
            {
                name: "Srijan",
                description: "Srijan is the yearly publication of MNNIT, the annual magazine, providing an open platform for individuals be it current students or the alums, to express their thoughts and ideas freely. It serves as a forum where people can share their views without fear of judgment or censorship. It is a canvas for creativity where people can showcase their talents and skills.",
                image: images.srijan
            },
            {
                name: "Alchemy - Dramatics Club MNNIT",
                description: `Alchemy is the vibrant dramatics club of MNNIT that brings together students from diverse backgrounds who share a passion for theater and performance. 
                        With a mission to create meaningful  and impactful productions.Alchemy provides a platform for students to hone thier craft and show their acting, writing & directing talent.`,
                image: images.drams
            }
        ]
    },
    {
        name: 'Others',
        clubs: [
            {
                name: "Alumni Association",
                description: "MNNIT Alumni Association is an organization which acts as an interface between the esteemed alumni of the Institute and its bright students.",
                image: images.alumni
            },
            {
                name: "E-Cell",
                description: `E-Cell is a Entrepreneurship community that fosters innovation and creativity among students. 
                        Our goal is to create a nationwide community of startup enthusiasts and bring them together under one umbrella.`,
                image: images.ecell
            },
            {
                name: "Student Mentorship Program",
                description: `Student Mentorship Program (SMP) is an initiative with a vision of procuring a hassle-free environment in the college, 
                        strengthening the senior- junior relationship.SMP organizes regular doubt clearing and counselling interaction.`,
                image: images.smp
            }
        ]
    }
]
