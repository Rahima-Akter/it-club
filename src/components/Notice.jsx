// Notice.js
import React from 'react';

const Notice = () => {
    const notices = [
        {
            id: 1,
            title: "Upcoming Workshop: Web Development",
            date: "November 10, 2024",
            content: "Join us for a workshop on modern web development practices. Sign up now!",
        },
        {
            id: 2,
            title: "Monthly Meeting",
            date: "November 15, 2024",
            content: "Don't miss our monthly meeting to discuss club activities and upcoming events.",
        },
        {
            id: 3,
            title: "Hackathon Announcement",
            date: "November 20, 2024",
            content: "Participate in our first-ever hackathon! More details to follow.",
        },
        {
            id: 4,
            title: "Guest Speaker: Tech Innovator",
            date: "November 25, 2024",
            content: "Join us for an inspiring talk from a leading figure in technology. Open to all members!",
        },
        {
            id: 5,
            title: "Coding Bootcamp Registration",
            date: "December 1, 2024",
            content: "Registration for our coding bootcamp is now open! Limited spots available.",
        },
        {
            id: 6,
            title: "End of Semester Party",
            date: "December 15, 2024",
            content: "Celebrate the end of the semester with food, fun, and games. RSVP required.",
        },
    ];

    return (
            <div className="flex flex-col items-center justify-center flex-1 p-8 mb-12">
                <h2 className="text-3xl font-bold lg:mb-6 mb-4 text-center text-gray-800">Notices</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                    {notices.map((notice) => (
                        <div key={notice.id} className="bg-white border-2 border-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">{notice.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{notice.date}</p>
                            <p className="text-gray-600">{notice.content}</p>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default Notice;
