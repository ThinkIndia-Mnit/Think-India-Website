import React from 'react'

const Sponsers = () => {
    return (
        <div
            className="lg:px-20 lg:py-20 md:px-20 md:py-20 px-5 py-10"
            id="sponsers"
        >
            <div className="text-5xl my-5" style={{ color: "#ADEFD1FF" }}>
                SPONSERS
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <a href="https://hackclub.com/" target="_blank" rel='noreferrer'>

                            <div class="p-4 w-max flex flex-col text-center items-center bg-white rounded-lg mx-5 shadow-2xl shadow-emerald-400 hover:scale-110 transition-transform my-5">
                                <div class="h-44 w-44 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0 ">
                                    <img src="https://assets.hackclub.com/flag-standalone.svg" />
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-4xl title-font font-semibold mb-3 font-robotic text-black" >Hack Club</h2>

                                </div>
                            </div>
                        </a></div>
                </div>
            </section >
        </div >
    )
}

export default Sponsers;