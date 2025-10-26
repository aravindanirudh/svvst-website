import "./styles/index.css"
import Hero from "./Hero.jsx"
import MissionVisionValues from "./MissionVisionValues.jsx"
import Events from "./Events.jsx"
import Founders from "./Founders.jsx"
import ContactUs from "./ContactUs.jsx"
import Copyright from "./Copyright.jsx"

function App() {
  return (
    <div>
      <Hero/>
      <hr className="horizontal-divider"/>
      <MissionVisionValues/>
      <hr className="horizontal-divider"/>
      <Events/>
      <hr className="horizontal-divider"/>
      <Founders/>
      <hr className="horizontal-divider"/>
      <ContactUs/>
      <hr className="horizontal-divider"/>
      <Copyright/>
      <hr className="horizontal-divider"/>
    </div>
  )
}

export default App