import Blogs from './components/Blogs'
import ClubProjects from './components/ClubProjects'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Introduction from './components/Introduction.'
import MemberHighlights from './components/MemberHighlights'
import MembershipBenifits from './components/MembershipBenifits'
import Navbar from './components/Navbar'
import UpcomingEvents from './components/UpcomingEvents'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Introduction></Introduction>
      <UpcomingEvents></UpcomingEvents>
      <ClubProjects></ClubProjects>
      <MembershipBenifits></MembershipBenifits>
      {/* <Blogs></Blogs> */}
      <MemberHighlights></MemberHighlights>
      <Footer></Footer>
    </>
  )
}

export default App
