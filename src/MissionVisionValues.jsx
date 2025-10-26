import "./styles/index.css";
import { FaEye } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";

const MissionVisionValues = () => {
  return (
    <div className="MiViVa-main-div" id="mission-vision-values">
        <h1 className="MiViVa-h1">Ethos</h1>
        <div className="MiViVa-card-container">
            <div className="MiViVa-card">
                <FaEye className="MiViVa-card-icon"/>
                <h2 className="MiViVa-card-h2">Our Mission</h2>
                <p className="MiViVa-card-p">To serve society through quality education, skill development, financial assistance, healthcare, moral and spiritual growth, child welfare, elderly care, and disaster relief, ensuring holistic upliftment of the community.</p>
            </div>
            <div className="MiViVa-card">
                <GiBullseye className="MiViVa-card-icon"/>
                <h2 className="MiViVa-card-h2">Our Vison</h2>
                <p className="MiViVa-card-p">To build an empowered, compassionate, and self-reliant community where every person has access to education, livelihood, healthcare, and dignified living.</p>
            </div>
            <div className="MiViVa-card">
                <IoDiamond className="MiViVa-card-icon"/>
                <h2 className="MiViVa-card-h2">Our Values</h2>
                <p className="MiViVa-card-p">Compassion • Integrity • Equity • Empowerment • Service • Sustainability • Collaboration</p>
            </div>
        </div>
    </div>
  )
}

export default MissionVisionValues