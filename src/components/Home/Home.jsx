/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import LogoTitle from "../../assets/images/logo-s.png"
import "./index.scss"
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
            <h1>Hi, <br/>I'm
            <img src={LogoTitle} alt="translator"/>
            alahuaddin
            <br/>
            translator
            </h1>
            <h2>Bussiness translator /  Teacher </h2>
            <Link to="/contact" className="flat-button" >CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home
