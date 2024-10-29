import { useState } from 'react'
import Blogs from './components/Blogs'
import ClubProjects from './components/ClubProjects'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Introduction from './components/Introduction.'
import MemberHighlights from './components/MemberHighlights'
import Navbar from './components/Navbar'
import UpcomingEvents from './components/UpcomingEvents'
import MissionVision from './components/About us/MissionVision'
import History from './components/About us/History'
import LeadershipTeam from './components/About us/LeadershipTeam'
import WhatWeDo from './components/About us/WhatWeDo'
import Achivements from './components/About us/Achivements'
import LoginForm from './components/LoginForm'
import JoinUs from './components/JoinUs'
import ContactUs from './components/ContactUs'
import Notice from './components/Notice'

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  // If the current tab is 'blogs', render the Blogs component
  if (currentTab === 'blogs') {
    return (
      <>
        <Navbar setCurrentTab={setCurrentTab} />
        <Blogs></Blogs>
        <Footer />
      </>
    );
  };

  if (currentTab == 'about') {
    return (
      <>
        <Navbar setCurrentTab={setCurrentTab} />
        <MissionVision></MissionVision>
        <History></History>
        <LeadershipTeam></LeadershipTeam>
        <WhatWeDo></WhatWeDo>
        <Achivements></Achivements>
        <Footer />
      </>
    )
  };

  if (currentTab == 'join') {
    return (
      <>
        <Navbar setCurrentTab={setCurrentTab} />
        <JoinUs></JoinUs>
        <Footer />
      </>
    );
  };

  if (currentTab == 'contact') {
    return (
      <>
        <Navbar setCurrentTab={setCurrentTab} />
        <ContactUs></ContactUs>
        <Footer />
      </>
    );
  };

  if (currentTab == 'notice') {
    return (
      <>
        <Navbar setCurrentTab={setCurrentTab} />
        <Notice></Notice>
        <Footer />
      </>
    );
  };

  // For all other tabs, render the default home content
  return (
    <div id="home">
      <Navbar setCurrentTab={setCurrentTab} />
      <Hero></Hero>
      <Introduction></Introduction>
      <div id='events'>
        <UpcomingEvents></UpcomingEvents>
      </div>
      <div id='projects'>
        <ClubProjects></ClubProjects>
      </div>
      <Footer />
    </div>
  );
}

export default App
