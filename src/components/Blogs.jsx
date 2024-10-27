import React from 'react';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "Exploring the Latest in AI Technology",
            excerpt: "Dive into the advancements in AI and how they are shaping the future of technology.",
            image: "https://www.shutterstock.com/image-photo/ai-tech-businessman-show-virtual-600nw-2253228203.jpg",
            content: "Artificial Intelligence (AI) is revolutionizing the world of technology...",
        },
        {
            id: 2,
            title: "Web Development Trends to Watch",
            excerpt: "Stay updated with the latest trends in web development and enhance your skills.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVLTRcrdua57OtEvNB97dFDLIYxniqkHUNg&s", 
            content: "The field of web development is constantly evolving...",
        },
        {
            id: 3,
            title: "Understanding Cloud Computing",
            excerpt: "A comprehensive guide to cloud computing and its benefits for businesses.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7HXqbQ9Y0km_45OI7YPCP5qWRcuylJVpFg&s",
            content: "Cloud computing has transformed the way businesses operate...",
        },
        {
            id: 4,
            title: "Cybersecurity Best Practices",
            excerpt: "Learn essential tips and practices to protect yourself online.",
            image: "https://www.shutterstock.com/image-vector/cybersecurity-data-server-center-network-260nw-2067665795.jpg",
            content: "As technology advances, so do the threats to our cybersecurity...",
        },
    ];

    return (
        <div className="w-11/12 mx-auto my-8">
            <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
            <div className="space-y-3">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-lg shadow-lg mb-10 flex lg:flex-row flex-col items-center gap-5 border-2"
                    >
                        <div className="flex-shrink-0 w-full lg:w-1/2">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
                            <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                            <a
                                href="#"
                                className="inline-block mt-4 text-violet-800 underline lg:pb-0 pb-2 md:pb-10"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
