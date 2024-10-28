const WhatWeDo = () => {
    const activities = [
        {
            title: "Workshops",
            description: "Hands-on workshops to enhance your skills and knowledge in various tech fields.",
            icon: "fas fa-chalkboard-teacher",
            bgClass: "bg-gradient-to-r from-green-400 to-blue-500",
        },
        {
            title: "Events",
            description: "Join us for exciting events that bring together tech enthusiasts and industry experts.",
            icon: "fas fa-calendar-alt",
            bgClass: "bg-gradient-to-r from-purple-500 to-pink-500",
        },
        {
            title: "Projects",
            description: "Collaborate on innovative projects that challenge your creativity and technical skills.",
            icon: "fas fa-project-diagram",
            bgClass: "bg-gradient-to-r from-blue-400 to-teal-500",
        },
        {
            title: "Networking",
            description: "Build valuable connections with peers and professionals in the tech community.",
            icon: "fas fa-users",
            bgClass: "bg-gradient-to-r from-orange-400 to-red-500",
        },
    ];

    return (
        <div className="md:w-11/12 w-10/12 mx-auto mt-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 my-8 drop-shadow-lg">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activities.map((activity) => (
                    <div key={activity.title} className={`relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${activity.bgClass}`}>
                        <div className="p-6 text-white">
                            <i className={`${activity.icon} fa-2x mb-4`}></i>
                            <h3 className="text-2xl font-semibold">{activity.title}</h3>
                            <p className="mt-2">{activity.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatWeDo;
