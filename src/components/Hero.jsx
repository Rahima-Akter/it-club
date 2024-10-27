const Hero = () => {
    return (
        <div className="w-11/12 mx-auto rounded-2xl my-8">
            <div className="relative text-white">
                <div className="h-[400px] relative">
                    <img src="../../src/assets/banner.jpg" alt="Banner" className="rounded-2xl w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl"></div>
                </div>
                <div className="absolute md:top-[25%] lg:left-[30%] top-[20%] left-[2%] md:left-[18%] text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 md:text-4xl text-3xl font-bold px-6">Welcome to It Club</h1>
                        <p className="mb-5 px-3 opacity-80">
                            A club where students can explore, research, invent their own technologies. 
                            Where students can compete among themselves while learning with each other.
                        </p>
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

