import React from 'react'
import { achievementsGroup } from '../models/achievement'

const Achievements: React.FC = () => {
    return (
        <div className="container max-w-4xl p-2 mx-auto mt-6">
            {
                achievementsGroup.map((group) => (
                    <div>
                        <div className="d-flex justify-content-center text-3xl font-weight-900">
                            <h2 className="text-3xl text-center font-bold text-gray-800 md:text-4xl tracking-tight">
                                {group.year}
                            </h2>
                            <hr className="w-28 h-1 mx-auto my-2 bg-red-700 border-0 rounded" />
                        </div>

                        <div className="bg-white text-justify mt-8 justify-content-center">
                            <div className="p-4">
                                <ol className="border-l-2 border-red-700">
                                    {
                                        group.achievements.map((achievement) => (
                                            <li>
                                                <div className="flex flex-start items-center">
                                                    <div className="bg-red-700 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2">
                                                    </div>
                                                    <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                                                        {achievement.title}
                                                    </h4>
                                                </div>
                                                <div className="ml-6 mb-6 pb-6">
                                                    {/* <h1 className="text-red-700 hover:text-red-800 focus:text-blue-800 duration-300 transition ease-in-out text-sm">
                                                            {group.year}
                                                        </h1> */}
                                                    <p className="text-gray-700 mt-2 mb-4">
                                                        {achievement.description}<br />
                                                        {
                                                            achievement.teams.map((team) => (
                                                                <div>
                                                                    {team.name}{' : '}
                                                                    {
                                                                        team.members.map((member, index) => (
                                                                            <a href={member.linkedin}
                                                                                target="_blank"
                                                                                className="text-red-700 hover:text-red-800 focus:text-blue-800 duration-300 transition ease-in-out"
                                                                            >
                                                                                {member.name} {index !== team.members.length - 1 ? '- ' : ''}
                                                                            </a>
                                                                        ))
                                                                    }
                                                                </div>
                                                            ))
                                                        }
                                                    </p>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Achievements
