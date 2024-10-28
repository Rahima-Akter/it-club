const LeadershipTeam = () => {
    const leaders = [
        {
            name: "Alice Johnson",
            title: "President",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObwzaYOuzqyGQw6Y2J28yFh9sQQ9QJexYlA&s",
            description: "Alice leads the club with a passion for technology and innovation, inspiring others to achieve their best."
        },
        {
            name: "Bob Smith",
            title: "Vice President",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDw7S3VbSnlmKwS_uYtyQmd0UBaTPLsgR348JwOD7QTVzBVD6VwcUilIAF6WhnzH-NO4&usqp=CAU",
            description: "Bob supports club initiatives and drives community engagement through various tech events."
        },
        {
            name: "Charlie Brown",
            title: "Treasurer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkY8So6fWNqdU8NGTrlu0yPWSrPrQrp3fXCg&s",
            description: "Charlie manages the club's finances, ensuring we have the resources to pursue our goals."
        },
        {
            name: "Dana White",
            title: "Secretary",
            image: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
            description: "Dana keeps our records organized and coordinates communication within the team."
        },
    ];

    return (
        <div className="md:w-11/12 w-10/12 mx-auto mt-12">
            <h2 className="md:text-4xl text-3xl font-extrabold text-center text-gray-800 mb-8 drop-shadow-lg">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {leaders.map((leader) => (
                    <div key={leader.name} className=" bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105  border-4 border-b-teal-300">
                        <div className=" rounded-lg"></div>
                        <img src={leader.image} alt={leader.name} className="w-full h-48 object-cover relative z-10" />
                        <div className="relative z-10 p-4">
                            <h3 className="text-2xl font-bold text-gray-800">{leader.name}</h3>
                            <p className="text-gray-600">{leader.title}</p>
                            <p className="mt-2 text-gray-700">{leader.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeadershipTeam;
