const JoinUs = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 my-20">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-96">
                <h2 className="text-3xl font-bold mb-6 text-center drop-shadow-md  text-white">Join the IT Club</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white mb-1">Name:</label>
                        <input
                            type="text"
                            required
                            placeholder="enter your name here"
                            className="border border-gray-300 rounded-md p-3 w-full transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white mb-1">Email:</label>
                        <input
                            type="email"
                            required
                            placeholder="enter your mail here"
                            className="border border-gray-300 rounded-md p-3 w-full transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-white mb-1">Password:</label>
                        <input
                            type="password"
                            required
                            placeholder="enter your passward here"
                            className="border border-gray-300 rounded-md p-3 w-full transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-l from-blue-700 to-pink-700 text-white rounded-md py-2 px-6 hover:bg-blue-700 transition duration-200 shadow-lg transform hover:scale-105"
                        >
                            Join Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JoinUs;