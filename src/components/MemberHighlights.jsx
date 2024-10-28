const MemberHighlights = () => {
    const members = [
        {
            id: 1,
            name: "Alice Johnson",
            role: "President",
            description: "Leading the club with vision and passion, Alice has organized numerous successful events.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObwzaYOuzqyGQw6Y2J28yFh9sQQ9QJexYlA&s",
            rating: 5,
        },
        {
            id: 2,
            name: "Bob Smith",
            role: "Vice President",
            description: "Bob is a tech enthusiast who mentors new members and spearheads innovative projects.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDw7S3VbSnlmKwS_uYtyQmd0UBaTPLsgR348JwOD7QTVzBVD6VwcUilIAF6WhnzH-NO4&usqp=CAU",
            rating: 4,
        },
        {
            id: 3,
            name: "Charlie Brown",
            role: "Event Coordinator",
            description: "Charlie's creativity shines in organizing engaging events that bring members together.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkY8So6fWNqdU8NGTrlu0yPWSrPrQrp3fXCg&s",
            rating: 5,
        },
        {
            id: 4,
            name: "Diana Prince",
            role: "Web Developer",
            description: "Diana's coding skills have helped the club create a strong online presence and useful tools.",
            image: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
            rating: 4,
        },
    ];

    return (
        <div className="md:w-11/12 w-10/12 mx-auto my-8">
            <h2 className="font-extrabold md:text-4xl text-3xl text-center my-8 drop-shadow-lg">Member Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 border border-gray-300"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="rounded-full w-32 h-32 mb-4 object-cover border-4 border-gray-100 shadow-md"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                        <p className="text-gray-500 mt-2 text-center">{member.description}</p>
                        <div className="flex mt-2">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index}>
                                    <i className={`fa-solid fa-star ${index < member.rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberHighlights;
