import React from 'react'

const Skills = () => {
    return (
        <section id="skill" className="bg-white py-20">
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>

                <div className="relative mt-10 pt-1">
                    <label htmlFor="" className="flex text-xl font-bold pb-5">Front-End</label>
                    <div className="overflow-hidden  h-5 mb-4 text-xs flex rounded bg-indigo-300">
                        <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                    </div>
                </div>
                <div className="relative mt-10 pt-1">
                    <label htmlFor="" className="flex text-xl font-bold pb-5">Backend developement</label>
                    <div className="overflow-hidden  h-5 mb-4 text-xs flex rounded bg-indigo-300">
                        <div style={{ width: "85%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                    </div>
                </div>
                <div className="relative mt-10 pt-1">
                    <label htmlFor="" className="flex text-xl font-bold pb-5">Programming</label>
                    <div className="overflow-hidden  h-5 mb-4 text-xs flex rounded bg-indigo-300">
                        <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Skills
