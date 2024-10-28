const Achievements = () => {
  const achievements = [
    {
      title: "Best Tech Club 2023",
      description: "Recognized for our innovative events and projects that inspire the community.",
      icon: "fas fa-trophy",
      backgroundImage: "https://img.freepik.com/free-vector/internet-networking-technology-background-vector-with-blue-digital-wave_53876-112177.jpg",
    },
    {
      title: "Hackathon Champions",
      description: "Won the regional hackathon with our groundbreaking AI project.",
      icon: "fas fa-medal",
      backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFVErPAa8Cko1VFjHK6G8uEDpoY_1OmOSLw&s",
    },
    {
      title: "Community Engagement Award",
      description: "Honored for our contributions to local tech initiatives and outreach.",
      icon: "fas fa-handshake",
      backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl46ZQDd4R4FSBbCAbZHOJoxoMoGjdFsqOg&s", 
    },
    {
      title: "Best Workshop Series",
      description: "Awarded for hosting the most engaging workshops of the year.",
      icon: "fas fa-chalkboard-teacher",
      backgroundImage: "https://media.licdn.com/dms/image/C4D12AQH44SmZ460O3Q/article-cover_image-shrink_720_1280/0/1520119964985?e=2147483647&v=beta&t=x_QdetKlyRJJ2cF9s8e6qFV0VUWs-x6rIY-tjB3-qfM",
    },
  ];

  return (
    <div className="md:w-11/12 w-10/12 mx-auto my-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 drop-shadow-lg">Achievements and Recognition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="relative rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url(${achievement.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
            <div className="relative p-6 text-white z-10">
              <i className={`${achievement.icon} fa-3x mb-4`}></i>
              <h3 className="text-2xl font-semibold">{achievement.title}</h3>
              <p className="mt-2">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
