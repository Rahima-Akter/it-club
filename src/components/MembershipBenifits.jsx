const MembershipBenifits = () => {
    const benefits = [
        {
            id: 1,
            title: "Networking Opportunities",
            description: "Connect with fellow students and industry professionals to expand your network.",
            icon: <i className="fa-solid fa-user text-gray-800"></i>,
        },
        {
            id: 2,
            title: "Skill Development",
            description: "Participate in workshops and projects to enhance your technical and soft skills.",
            icon: <i className="fa-solid fa-laptop-code text-gray-800"></i>,
        },
        {
            id: 3,
            title: "Exclusive Resources",
            description: "Access to premium resources, tools, and materials for your learning journey.",
            icon: <i className="fa-solid fa-book-open text-gray-800"></i>,
        },
        {
            id: 4,
            title: "Collaborative Projects",
            description: "Work on innovative projects with peers and gain hands-on experience.",
            icon: <i className="fa-solid fa-diagram-project text-gray-800"></i>,
        },
        {
            id: 5,
            title: "Mentorship Programs",
            description: "Get guidance from experienced mentors who can help you navigate your career path.",
            icon: <i className="fa-solid fa-chalkboard-user text-gray-800"></i>,
        },
        {
            id: 6,
            title: "Events and Competitions",
            description: "Participate in exciting events and competitions to showcase your skills and creativity.",
            icon: <i className="fa-solid fa-award text-gray-800"></i>,
        },
    ];

    return (
        <div className="w-11/12 mx-auto my-8">
            <h2 className="font-extrabold md:text-4xl text-3xl text-center mb-6 drop-shadow-lg6">Membership Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                {benefits.map((benefit) => (
                    <div
                        key={benefit.id}
                        className="bg-[#f5f5dc] bg-opacity-30 border rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-1000"
                    >
                        <div className="text-blue-600 text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-800">{benefit.title}</h3>
                        <p className="text-gray-600 mt-2 text-center">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MembershipBenifits;
