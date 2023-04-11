interface Member {
    name: string
    meta: string
    profilePic: string
    github?: string
    twitter?: string
    linkedin?: string
}

export const teamMembers: Member[] = [
    {
        name: 'Shashank Verma',
        meta: 'CSE, Pre-final year',
        profilePic: 'https://github.com/shank03.png',
        github: 'https://github.com/shank03'
    },
    {
        name: 'Prakhar Agarwal',
        meta: 'MECH, Pre-final year',
        profilePic: 'https://github.com/prackode.png',
        github: 'https://github.com/prackode'
    },
    {
        name: 'Ashutosh Suthar',
        meta: 'ECE, Pre-final year',
        profilePic: 'https://github.com/ashutoshsuthar2020.png',
        github: 'https://github.com/ashutoshsuthar2020'
    }
];
