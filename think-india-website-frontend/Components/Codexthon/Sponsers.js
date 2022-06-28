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
            <div className="text-2xl w-full" style={{ textAlign: "-webkit-center" }}>
                <div className="disprow">
                    <div
                        className="bg-white p-5 rounded-2xl"
                        style={{ width: "max-content", margin: "50px auto" }}
                    >
                        <img
                            src="/clerky.png"
                            alt="org1"
                            className="rounded-2xl text-center h-auto"
                            style={{ width: "250px" }}
                        />
                        <div
                            className="mt-6 text-2xl text-black font-semibold"
                            style={{ width: "max-content" }}
                        >
                            CLERKY
                        </div>
                        <div
                            className="my-3 text-2xl text-black "
                            style={{ width: "250px" }}
                        >
                            <p>Clerky is the only online legal service obsessed with helping startup founders get legal paperwork done safely.</p>
                        </div>
                    </div>
                    <div
                        className="bg-white p-5 rounded-2xl"
                        style={{ width: "max-content", margin: "50px auto" }}
                    >
                        <img
                            src="/hackclub.png"
                            alt="org1"
                            className="rounded-2xl text-center h-auto"
                            style={{ width: "250px", height: "100px" }}
                        />
                        <div
                            className="mt-6 text-2xl text-black font-semibold"
                            style={{ width: "max-content" }}
                        >
                            HACKCLUB
                        </div>
                        <div
                            className="my-3 text-2xl text-black "
                            style={{ width: "250px" }}
                        >
                            <p>Hack Club is a nonprofit network of high school coding clubs and makers around the world.</p>
                        </div>
                    </div>

                    <div
                        className="bg-white p-5 rounded-2xl"
                        style={{ width: "300px", margin: "50px auto" }}
                    ><div style={{ height: "100px", justifyContent: "center", padding: "20px" }}>
                            <img
                                src="/OReilly.png"
                                alt="org1"
                                className="rounded-2xl text-center h-auto"
                                style={{ width: "250px", }}
                            />
                        </div>

                        <div
                            className="mt-6 text-2xl text-black font-semibold"
                            style={{ width: "max-content" }}
                        >
                            O'Reilly
                        </div>
                        <div
                            className="my-3 text-2xl text-black "
                            style={{ width: "250px" }}
                        >
                            <p>O’Reilly’s mission is to change the world by sharing the knowledge of innovators.</p>
                        </div>
                    </div>
                </div>
                <div className="disprow">

                    <div
                        className="bg-white p-5 rounded-2xl"
                        style={{ width: "300px", margin: "50px auto" }}
                    ><div style={{ height: "100px", justifyContent: "center" }}>
                            <img
                                src="/taskade.png"
                                alt="org1"
                                className="rounded-2xl text-center h-auto"
                                style={{ width: "100px", }}
                            />
                        </div>
                        <div
                            className="mt-6 text-2xl text-black font-semibold"
                            style={{ width: "max-content" }}
                        >
                            Taskade
                        </div>
                        <div
                            className="my-3 text-2xl text-black "
                            style={{ width: "250px" }}
                        >
                            <p>Taskade is the all-in-one to-do list app to manage tasks, organize notes, and collaborate with your team.</p>
                        </div>
                    </div>
                    <div
                        className="bg-white p-5 rounded-2xl"
                        style={{ width: "300px", margin: "50px auto" }}
                    ><div style={{ height: "100px", justifyContent: "center" }}>
                            <img
                                src="/gmc.jfif"
                                alt="org1"
                                className="rounded-2xl text-center h-auto"
                                style={{ width: "120px", }}
                            />
                        </div>
                        <div
                            className="mt-6 text-2xl text-black font-semibold"
                            style={{ width: "max-content" }}
                        >
                            Give My Certificate
                        </div>
                        <div
                            className="my-3 text-2xl text-black "
                            style={{ width: "250px" }}
                        >
                            <p>Give my certificate is a platform for organizations to generate and send verifiable documents.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sponsers;