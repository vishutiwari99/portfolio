import React from 'react'

const Experiences = () => {
    return (
        <div className="bg-gray-800 pb-10">
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl pt-8 font-semibold text-white">Experiences</h2>

                <div className="flex items-center justify-center mt-10">
                    <div className="flex flex-col  justify-around md:flex-row">


                        <div className="max-w-xs p-5  transform transition duration-500 hover:scale-110">
                            <div className="bg-gray-200 rounded ">
                                <div style={{ marginBottom: '-3rem' }} className="flex justify-items  items-center bg-green-700 rounded  h-44">
                                    <h2 className="text-white font-bold m-12">The Sparks foundation</h2>
                                </div>
                                <img src="./spark.png" className="inline-block bg-gray-200  h-20 w-20 rounded-full ring-2 ring-white" alt="" />
                                <div className="h-44">
                                    <div>
                                        <h2 className="text-lg">Technical Intern</h2>
                                        <p className="text-sm">djsjdhdwdjwidjiwjdiwj whdwhdjdhw jhduwhujwsdhjshjdh</p>
                                    </div>
                                    <ul className="list-disc list-inside flex flex-col justify-center ">
                                        <li className="text-xs">jhjkdjksjdksjdkjdkjsjdwdwdwdw wdwd</li>
                                        <li className="text-xs">jhjkdjksjdksjdkjdkjsjdwdwdwdw wdwd</li>
                                        <li className="text-xs">jhjkdjksjdksjdkjdkjsjdwdwdwdw wdwd</li>

                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="max-w-xs p-5 transform transition duration-500 hover:scale-110">
                            <div className="bg-gray-200 rounded ">
                                <div style={{ marginBottom: '-3rem' }} className="flex justify-items  items-center bg-blue-500 rounded  h-44">
                                    <h2 className="text-white font-bold m-12  ">ProAce International</h2>
                                </div>
                                <img src="./pro.png" className="inline-block bg-gray-400  h-20 w-20 rounded-full ring-2 ring-white" alt="" />
                                <div className="h-44">
                                    <div className="">
                                        <h2 className="">Web developer </h2>
                                    </div>
                                    <ul className="list-disc list-inside flex flex-col justify-center ">
                                        <li className="text-xs">jhjkdjksjdksjdkjdkjsjdwdwdwdw wdwd</li>
                                        <li className="text-xs">jhjkdjksjdksjdkjdkjsjdwdwdwdw wdwd</li>
                                        <li className="text-xs">jhjkdjksjdksjdkjdkjsjdwdwdwdw wdwd</li>

                                    </ul>
                                </div>

                            </div>


                        </div>








                    </div>
                </div>
            </div>


        </div>
    )
}

export default Experiences
