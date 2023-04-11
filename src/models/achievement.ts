interface Member {
    name: string
    linkedin: string
}

interface Team {
    name: string
    members: Member[]
}

interface Achievement {
    title: string
    description: string
    teams: Team[]
}

interface Group {
    year: number | string
    achievements: Achievement[]
}

export const achievementsGroup: Group[] = [
    {
        year: 2021,
        achievements: [
            {
                title: 'e-Yantra - Successfully Completed Till Task 6, Top 10 (Theme - Vitaran drone)',
                description: 'Placed top 10 out of 365 teams in the event of year-long Robotics Competition By IIT Bombay & MHRD.',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Purushotam Kumar Agrawal', linkedin: 'https://www.linkedin.com/in/puru2411' },
                            { name: 'Mehul Singhal', linkedin: 'https://www.linkedin.com/in/mehul-singhal-9bb75a1a0' },
                            { name: 'Anurag Gupta', linkedin: 'https://www.linkedin.com/mwlite/in/anurag-gupta-806a161aa' },
                            { name: 'Abhishek Pathak', linkedin: 'https://www.linkedin.com/in/abhishek-kumar-pathak-07b929146' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        year: 2020,
        achievements: [
            {
                title: 'Technex - Maze Explorer - Third Position',
                description: 'Placed 3rd in the event conducted at IIT BHU (Technex).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Purushotam Kumar Agrawal', linkedin: 'https://www.linkedin.com/in/puru2411' },
                            { name: 'Mehul Singhal', linkedin: 'https://www.linkedin.com/in/mehul-singhal-9bb75a1a0' },
                            { name: 'Pravesh Pandey', linkedin: 'https://www.linkedin.com/mwlite/in/pravesh25' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        year: 2019,
        achievements: [
            {
                title: 'Techkriti - Embedded Event - Second Runner Up',
                description: 'Won the event conducted at IIT KGP (Megalith).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Anuj Tiwari', linkedin: 'https://www.linkedin.com/in/anuj-tiwari-mnnit' },
                            { name: 'Shishir Agarahri', linkedin: 'https://www.linkedin.com/in/shishiragrahari0310' },
                            { name: 'Saurabh Kumar Yadav', linkedin: 'https://www.linkedin.com/in/saurabh-1729' },
                            { name: 'Prashant Tripathi', linkedin: 'https://www.linkedin.com/in/prashant-tripathi-264ab81b5' },
                        ]
                    },
                ]
            },
            {
                title: 'Megalith - Manual Robotics Championship - Winner',
                description: 'Won the event conducted at IIT KGP (Megalith).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Anurag Upadhyay', linkedin: 'https://www.linkedin.com/in/anurag-upadhyay-20171021' },
                            { name: 'Asit Kumar', linkedin: 'https://www.linkedin.com/in/asit-kumar-bb0a6a182' },
                            { name: 'Ashish Kumar Gautam', linkedin: '' },
                            { name: 'Akash Kumar', linkedin: '' },
                        ]
                    },
                ]
            },
            {
                title: 'e-Yantra - SemiFinalist (Theme - Pollinator Bee)',
                description: 'Reached semi-finals in the event of year-long Robotics Competition By IIT Bombay & MHRD.',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Bhuvan Jhamb', linkedin: 'https://www.linkedin.com/in/bhuvanjhamb' },
                            { name: 'Keshari Tiwari', linkedin: 'https://www.linkedin.com/in/keshari-nath-tiwari-7a11b6149' },
                            { name: 'Parag Saroha', linkedin: 'https://www.linkedin.com/in/parag-saroha-28b469168' },
                            { name: 'Archit Chaudhary', linkedin: 'https://www.linkedin.com/in/archit-chaudhary-010a78164' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        year: 2018,
        achievements: [
            {
                title: 'e-Yantra - Chaser Drone - Second Stage',
                description: 'Reached second year in the event of year-long Robotics Competition By IIT Bombay & MHRD.',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Kartik Singh', linkedin: 'https://www.linkedin.com/in/kartik-singh-lmp' },
                            { name: 'Prateek Kumar Rai', linkedin: 'https://www.linkedin.com/in/prateek-kumar-rai-697981103' },
                            { name: 'Jaswant', linkedin: '' },
                            { name: 'Murlidhar Patidar', linkedin: 'https://www.linkedin.com/in/murlidhar-patidar1996' },
                        ]
                    },
                ]
            },
            {
                title: 'Techkriti - Embedded - Second Position | Home Automation - Third',
                description: 'Placed 2nd and 3rd in event conducted at IIT Kanpur (Techkriti).',
                teams: [
                    {
                        name: '2nd Placed Team',
                        members: [
                            { name: 'Anshul Singh', linkedin: 'https://www.linkedin.com/in/anshulsingh747' },
                            { name: 'Arsh Singh', linkedin: 'https://www.linkedin.com/in/arshsingh474' },
                            { name: 'Manas Abhilash Gundapuneni', linkedin: 'https://www.linkedin.com/in/gundapuneni' },
                        ]
                    },
                    {
                        name: '3rd Placed Team',
                        members: [
                            { name: 'Gaurav Bansal', linkedin: 'https://www.linkedin.com/in/gauravbansal98' },
                            { name: 'Namrta Lakhwan', linkedin: 'https://www.linkedin.com/in/namrta-lakhwan-27647a138' },
                        ]
                    },
                ]
            },
            {
                title: 'Techkriti - Manual Robotics - Finalist',
                description: 'Placed under top 4 with over more than ~70+ teams in event conducted at IIT Kanpur (Techkriti).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Anurag Upadhyay', linkedin: 'https://www.linkedin.com/in/anurag-upadhyay-20171021' },
                            { name: 'Abhishek Singh', linkedin: 'https://www.linkedin.com/in/abhisheksinghchauhan800' },
                            { name: 'Kunal Shrivastav', linkedin: '' },
                            { name: 'Arjun', linkedin: '' },
                            { name: 'Deepak', linkedin: '' },
                        ]
                    },
                ]
            },
            {
                title: 'Conscientia - Autonomous Robotics - Winner',
                description: 'Won the event conducted at IIST Thiruvananthapuram',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Anurag Upadhyay', linkedin: 'https://www.linkedin.com/in/anurag-upadhyay-20171021' }
                        ]
                    },
                ]
            },
            {
                title: 'Techkriti - International Autonomous Robotics Competition - 2 Teams - Finalists',
                description: 'Placed under top 5 with over more than ~70+ teams in event conducted at IIT Kanpur (Techkriti).',
                teams: [
                    {
                        name: 'Team 1',
                        members: [
                            { name: 'Bhuvan Jhamb', linkedin: 'https://www.linkedin.com/in/bhuvanjhamb' },
                            { name: 'Nitish Gupta', linkedin: 'https://www.linkedin.com/in/nitishgupta1101' },
                            { name: 'Parag Saroha', linkedin: 'https://www.linkedin.com/in/parag-saroha-28b469168' },
                            { name: 'Shivam Garg', linkedin: 'https://www.linkedin.com/in/shivam-garg-mnnit' },
                            { name: 'Sachin Kumar', linkedin: 'https://www.linkedin.com/in/sachin-kumar-951b8718b' },
                        ]
                    },
                    {
                        name: 'Team 2',
                        members: [
                            { name: 'Sahaj Bamba', linkedin: 'https://www.linkedin.com/in/sahaj-bamba' },
                            { name: 'Akshat Agrawal', linkedin: 'https://www.linkedin.com/in/akshat-agrawal-1b2445157' },
                            { name: 'Satyam Sharma', linkedin: 'https://www.linkedin.com/in/satyam-sharma-mnnit' },
                            { name: 'Hamza Siddhiqui', linkedin: 'https://www.linkedin.com/in/mohammed-hamza-siddiqui-68b076190' },
                            { name: 'Shaurya Pant', linkedin: 'https://www.linkedin.com/in/shauryapant' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        year: 2017,
        achievements: [
            {
                title: 'e-Yantra - Launch a Module - Finalists',
                description: 'Finalist in the year-long Robotics Competition By IIT Bombay &amp; MHRD',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Ayush Gaurav', linkedin: 'https://www.linkedin.com/in/kartik-singh-lmp' },
                            { name: 'Prateek Kumar Rai', linkedin: 'https://www.linkedin.com/in/prateek-kumar-rai-697981103' },
                            { name: 'Prashant Singh', linkedin: 'https://www.linkedin.com/in/prashant-singh-a2b564147' },
                            { name: 'Sachin Choudhary', linkedin: 'https://www.linkedin.com/in/choudhari2049' },
                        ]
                    },
                ]
            },
            {
                title: 'e-Yantra - Finalist',
                description: 'Finalist in the year-long Robotics Competition By IIT Bombay &amp; MHRD',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Ayush Gaurav', linkedin: 'https://www.linkedin.com/in/kartik-singh-lmp' },
                        ]
                    },
                ]
            },
            {
                title: 'Techkriti - Electromania - Winner',
                description: 'Won the event conducted at IIT Kanpur (Techkriti).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Shubham Maurya', linkedin: 'https://www.linkedin.com/in/shubham-maurya-565978bb' },
                        ]
                    },
                ]
            },
            {
                title: 'Techkriti - Electromania : Circuit Design - Third Position',
                description: 'Placed 3rd in the event conducted at IIT Kanpur (Techkriti).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Vishal Gupta', linkedin: 'https://www.linkedin.com/in/vishal-gupta-9b450791' },
                            { name: 'Sandeep Kumar', linkedin: 'https://www.linkedin.com/in/sandeepkumar0234' },
                            { name: 'Mohd. Nazar', linkedin: 'https://www.linkedin.com/in/nazar-mohammad-585195102' },
                            { name: 'Neeraj Kumar', linkedin: 'https://www.linkedin.com/in/neeraj-kumar-871199102' },
                        ]
                    },
                ]
            },
            {
                title: 'Techkriti - Electromania : Embedded Design - Winner',
                description: 'Won the event conducted at IIT Kanpur (Techkriti).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Vishal Gupta', linkedin: 'https://www.linkedin.com/in/vishal-gupta-9b450791' },
                            { name: 'Sandeep Kumar', linkedin: 'https://www.linkedin.com/in/sandeepkumar0234' },
                            { name: 'Mohd. Nazar', linkedin: 'https://www.linkedin.com/in/nazar-mohammad-585195102' },
                            { name: 'Neeraj Kumar', linkedin: 'https://www.linkedin.com/in/neeraj-kumar-871199102' },
                        ]
                    },
                ]
            },
            {
                title: 'Techkriti - International Autonomous Robotics Competition - Finalist',
                description: 'Placed under top 5 with over more than ~70+ teams in event conducted at IIT Kanpur (Techkriti).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Gaurav Bansal', linkedin: 'https://www.linkedin.com/in/gauravbansal98' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        year: '2016 and before',
        achievements: [
            {
                title: 'Technex - Maze Explorer - Finalists',
                description: 'Achieved in event conducted at IIT BHU (Technex).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Kartik Singh', linkedin: 'https://www.linkedin.com/in/kartik-singh-lmp' },
                        ]
                    },
                ]
            },
            {
                title: 'Techkriti - International Autonomous Robotics Competition - Finalist',
                description: 'Placed under top 5 with over more than ~70+ teams in event conducted at IIT Kanpur (Techkriti).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Naveen Chandra', linkedin: 'https://www.linkedin.com/in/naveen-chandra-n23' },
                            { name: 'Vishal Gupta', linkedin: 'https://www.linkedin.com/in/vishal-gupta-9b450791' },
                            { name: 'Mohd. Zaki', linkedin: 'https://www.linkedin.com/in/iamzaki' },
                        ]
                    },
                ]
            },
            {
                title: 'Techkriti - Electromania - Third Position',
                description: 'Placed 3rd in the event conducted at IIT Kanpur (Techkriti).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Shashank Singh', linkedin: 'https://www.linkedin.com/in/shashank-singh-b44984128' },
                        ]
                    },
                ]
            },
            {
                title: 'Techkriti - Eureka - Second Position',
                description: 'Placed 2nd in the event conducted at IIT Kanpur (Techkriti).',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Shubham Sharma', linkedin: 'https://www.linkedin.com/in/shubham-sharma-aa821963' },
                        ]
                    },
                ]
            },
            {
                title: 'Autonomous Robotics - Best Fresher',
                description: 'Achieved in the event conducted at IIT Kharagpur.',
                teams: [
                    {
                        name: 'Team',
                        members: [
                            { name: 'Naveen Chandra', linkedin: 'https://www.linkedin.com/in/naveen-chandra-n23' },
                            { name: 'Vishal Gupta', linkedin: 'https://www.linkedin.com/in/vishal-gupta-9b450791' },
                            { name: 'Mohd. Zaki', linkedin: 'https://www.linkedin.com/in/iamzaki' },
                        ]
                    },
                ]
            },
        ]
    },
]
