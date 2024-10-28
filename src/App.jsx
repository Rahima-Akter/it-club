import { useState } from 'react'
import Blogs from './components/Blogs'
import ClubProjects from './components/ClubProjects'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Introduction from './components/Introduction.'
import MemberHighlights from './components/MemberHighlights'
import MembershipBenifits from './components/MembershipBenifits'
import Navbar from './components/Navbar'
import UpcomingEvents from './components/UpcomingEvents'
import MissionVision from './components/About us/MissionVision'
import History from './components/About us/History'
import LeadershipTeam from './components/About us/LeadershipTeam'
import WhatWeDo from './components/About us/WhatWeDo'
import Achivements from './components/About us/Achivements'

function App() {
  const [currentTab, setCurrentTab] = useState('home'); // State to track the current tab

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
  }

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
      <MemberHighlights></MemberHighlights>
      <Footer />
    </div>
  );
}

export default App
