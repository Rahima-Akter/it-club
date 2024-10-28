const MissionVision = () => {
  return (
    <div className='md:w-11/12 w-10/12 mx-auto mt-12'>
      <h2 className="font-extrabold md:text-4xl text-3xl text-center my-8 drop-shadow-lg">Mission & Vision</h2>
      <div className="relative">
        <div
          className="flex flex-col gap-5 items-center justify-center bg-cover bg-center rounded-xl overflow-hidden"
          style={{
            backgroundImage: 'url(https://thumbs.dreamstime.com/b/our-mission-vision-values-text-surrounded-spinning-arrow-our-mission-vision-values-text-surrounded-spinning-arrows-109955445.jpg)',
            height: '400px',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl "></div> {/* Dark overlay */}
          <div className="relative px-5 md:px-0 z-10 lg:w-[50%] md:w-[70%] w-full mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300">
              Our mission is to empower individuals through education and hands-on experience in technology, fostering innovation and collaboration within the community.
            </p>
          </div>
          <div className="relative px-5 md:px-0 z-10 lg:w-[50%] md:w-[70%] w-full mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300">
              Our vision is to create a future where technology enhances lives and connects people, driving positive change and progress in our society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MissionVision;
