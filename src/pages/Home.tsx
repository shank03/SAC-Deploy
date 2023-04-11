import React from 'react'
import './styles.css'
import { images } from '../models/images'

const Home: React.FC = () => {

    const information: [string, string][] = [
        [
            'What is Student Activity Center(SAC)?',
            `Motilal Nehru National Institute of Technology Allahabad has been
                known for its academic excellence. The students of this institute
                keep raising the bar for themselves by proving to be a step ahead
                of the crowd, time and again in all activities. The institute has
                records of achievements in curricular as well as in
                extra-curricular activities. An extremely crucial role is played
                by the Student Activity Centre (SAC) of the institute in
                facilitating the activities and reaching out to the students under
                the supervision of the President SAC. The prime locations of the
                SAC are Students' Clubs, Boys' SAC and Girls' SAC, Multipurpose
                Hall, Athletics Ground, Gymkhana and other locations. The student
                activity center hires pool of part-time coaches/Trainers for
                various events on yearly basis to groom the talents of the
                students. At present about ten numbers of coaches are working and
                extending their services two-hour every day.`
        ],
        [
            'Curricular Activities',
            `The Institute provides ample avenues for the development and
                nurturing of creative and other talents in the students through
                the Student Activity Centre (SAC). All the activities are managed
                by students under the guidance of President, SAC and a team of
                Faculty In-Charges, Faculty Coordinators and Committees for
                various events. The SAC provide plateform to arrange Cultural,
                Technical and Managerial events, Personality development,
                Athletics, Indoor and Outdoor games, Yoga and other activities.
                The SAC also facilitate and encourage the students to take part in
                similar events in other institutions.`
        ],
    ]

    return (
        <div>
            <div className="text-center h-screen text-white align-middle relative overflow-hidden bg-no-repeat bg-cover home__main">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed home__img-div">
                    <div className="maintitle flex justify-center items-center h-full">
                        <div className="text-white">
                            <h2 className="font-semibold text-6xl mb-6">Student Activity Center</h2>
                            <h4 className="font-semibold text-4xl mb-20">MNNIT Allahabad</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 mx-auto space-y-6 sm:space-y-12 mt-4 ms-2 me-2">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {
                        information.map(([title, info]) => (
                            <div className="rounded-lg shadow-lg group hover:no-underline focus:no-underline p-6 space-y-2 hover:shadow-2xl duration-300">
                                <h3 className="text-2xl font-semibold">
                                    {title}
                                </h3>
                                <p>
                                    {info}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex ms-8 me-8 mb-8">
                <div className="flex flex-col rounded-lg bg-zinc-900 shadow-lg md:max-w md:flex-row hover:shadow-zinc-900 duration-300">
                    <img className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={images.aks} alt="" />
                    <div className="flex flex-col justify-start p-6">
                        <h5 className="mb-2 text-xl font-medium text-neutral-50">
                            From the President's Desk
                        </h5>
                        <p className="mb-4 text-base text-neutral-200">
                            Motilal Nehru National Institute of Technology Allahabad has been known for its excellence,
                            academically, and the students keep raising the bar for themselves by proving to be a step ahead
                            of the crowd, time and again. The institute, at the same time, also has records of achievements in
                            curricular as well as extra-curricular activities. An extremely crucial role is played by the Student
                            Activity Centre (SAC) of the institute in facilitating the activities and reaching out to the
                            students. The prime locations of the SAC are Students’ Clubs, Boys’ SAC and Girls’ SAC,
                            Multipurpose Hall, Athletics Ground and Gymkhana. The student activity center hires pool of
                            part-time coaches for various events on yearly basis to groom the talents of the students.<br />
                            The Institute provides ample avenues for the development and nurturing of creative and other
                            talents in the students through the Student Activity Centre (SAC). All the activities are managed
                            by students under the guidance of President, SAC and a team of Faculty In-Charges, Faculty
                            Coordinators and Committees for various events. The SAC provide avenues for Cultural,
                            Technical and Managerial events, Personality development, Atheletics, Indoor and Outdoor
                            games, Yoga and other activities. The SAC also facilitate and encourage the students to take part
                            in similar events in other institutions.
                            I encourage all the students to take part and actively involve in at least one of the event of the
                            SAC.<br />
                            I wish a very bright and sporty career to all the MNNIT students.<br />
                        </p>
                        <p className="text-xs text-neutral-300">
                            Prof. Anil Kumar Singh <br />
                            President Student Activity Center (SAC)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
