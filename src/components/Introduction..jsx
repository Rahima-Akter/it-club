const Introduction = () => {
    return (
        <div className="w-11/12 mx-auto my-3 ">
            <h1 className="font-extrabold md:text-4xl text-3xl text-center mb-6 drop-shadow-lg">
                Introduction
            </h1>
            <div className="my-8 grid lg:grid-cols-2 grid-cols-1 gap-6">
                {/* Text Content */}
                <div className="lg:order-1 order-2 lg:mt-20">
                    <h2 className="text-4xl text-center md:text-left font-semibold text-gray-800 mb-4 underline decoration-blue-500">
                        About Our IT Club
                    </h2>
                    <p className="text-gray-700 opacity-90 leading-relaxed text-center md:text-left md:px-0 px-3 md:text-lg text-xs">
                        The Cpi IT Club is a community of passionate students dedicated to exploring
                        the vast world of technology. We encourage innovation, collaboration, and
                        learning through various projects and activities. Join us to enhance your
                        skills, compete in challenges, and collaborate with like-minded individuals
                        who share a love for technology and innovation.
                    </p>
                </div>

                {/* Image */}
                <div className=" lg:order-2 order-1">
                    <img
                        src="../../src/assets/ai.jpg" // Replace with your image path
                        alt="Cpi IT Club"
                        className="rounded-2xl w-full h-auto object-cover shadow-lg"
                    />
                </div>
            </div>
        </div>

    );
};

export default Introduction;
