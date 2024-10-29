const LoginForm = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 backdrop-blur-lg bg-opacity-20 z-30">
            <div className="bg-white border-8 border-l-teal-400 border-b-0 border-t-0 border-r-0 rounded-lg shadow-lg p-8 w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email:</label>
                        <input
                            type="email"
                            required
                            className="border border-gray-300 rounded-md p-3 w-full transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Password:</label>
                        <input
                            type="password"
                            required
                            className="border border-gray-300 rounded-md p-3 w-full transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-violet-950 font-bold hover:underline transition duration-200"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
