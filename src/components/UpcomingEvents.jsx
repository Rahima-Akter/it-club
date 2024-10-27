const UpcomingEvents = () => {
    const events = [
        {
            id: 1,
            title: "Tech Workshop",
            date: "November 5, 2024",
            description: "Join us for an exciting workshop on the latest technologies and trends in IT.",
            link: "#"
        },
        {
            id: 2,
            title: "Hackathon",
            date: "November 20-21, 2024",
            description: "Compete with fellow members in our annual hackathon. Prizes for the best projects!",
            link: "#"
        },
        {
            id: 3,
            title: "Guest Speaker: John Doe",
            date: "December 1, 2024",
            description: "An inspiring talk from industry expert John Doe about the future of technology.",
            link: "#"
        },
    ];

    return (
        <div className="w-11/12 mx-auto my-8">
            <h2 className="font-extrabold md:text-4xl text-3xl text-center mb-6 drop-shadow-lg">Upcoming Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col">
                        <h3 className="text-2xl font-extrabold drop-shadow-lg ">{event.title}</h3>
                        <p className="text-gray-600">{event.date}</p>
                        <p className="text-gray-800 mt-2 flex-grow">{event.description}</p>
                        <a href={event.link} className="mt-4 inline-block bg-gray-800 text-white px-4 py-2 rounded-lg text-center hover:bg-violet-950 transition duration-1000">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;
