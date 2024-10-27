const ClubProjects = () => {
    const projects = [
        {
            id: 1,
            title: "AI Chatbot",
            description: "A smart chatbot designed to assist users with common queries and tasks using AI technologies.",
            image: "https://cdn.prod.website-files.com/634054c00f602044abb3060d/6493311b4fb3f00cc62310f1_Best%20AI%20Chatbots.webp"
        },
        {
            id: 2,
            title: "Web Development Bootcamp",
            description: "A hands-on bootcamp where students learn to create dynamic websites using modern frameworks.",
            image: "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/6iibPSLS9aTsGn2u2yiO"
        },
        {
            id: 3,
            title: "Mobile App Development",
            description: "Developing a mobile app to help students track their projects and deadlines effectively.",
            image: "https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png"
        },
        {
            id: 4,
            title: "Open Source Contribution",
            description: "A project aimed at contributing to open-source projects and learning collaborative coding practices.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgT3Y5ZngjLUkPPOnoEnRohSYAC9RCenRtF7q-QfL7znRbYP4hIjuWUoD2MVUA8zRLFgo&usqp=CAU"
        },
        {
            id: 5,
            title: "Data Science Initiative",
            description: "A project focused on data analysis and visualization to derive insights from large datasets.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR88vToYItrpAVwfJd-SzcyA1ArR3EnJMg8S18NG71Hxr1oOe6mOZrLvpH4l1EkvdP4KY&usqp=CAU"
        },
        {
            id: 6,
            title: "Blockchain Exploration",
            description: "An initiative to explore blockchain technology and its applications in various industries.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhoS4ajn2yOf4SB6Si92b5Ojfehs5ecobSA&s"
        },
    ];

    return (
        <div className="w-11/12 mx-auto my-8">
            <h2 className="font-extrabold md:text-4xl text-3xl text-center mb-6 drop-shadow-lg6">Club Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl duration-1000 border"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-md mb-4 object-cover h-48 w-full"
                        />
                        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                        <p className="text-gray-700 mt-2 flex-grow">{project.description}</p>
                        <a
                            href={project.link}
                            className="mt-4 inline-block bg-gray-800 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-violet-950 transition duration-1000 cursor-pointer"
                        >
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClubProjects;
