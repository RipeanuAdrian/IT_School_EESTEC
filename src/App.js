
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import logo_main from "./components/NavBar/logo.png";
import vectors_left from "./components/vectors.png";
import vectors_right from "./components/right_vector.png";
import { ReactComponent as VectorsSvg } from "./components/vectors.svg";
import { ReactComponent as VectorsSvg_left } from "./components/vectors_left.svg";
import facebook from "./components/facebook.png";
import instagram from "./components/instagram.png";
import linkedIn from "./components/linkedin.png";
import tiktok from "./components/tiktok.png";
import phone_icon from "./components/phoen_icon.png";
import locatie_icon from "./components/locatie_icon.png";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="midle_of_page">
        {/* <img src={vectors_left} className="vectors"/>
        <img src={logo_main} className="logo_main" />
        <img src={vectors_right} className="vectors"/> */}
        <VectorsSvg className="vectors" />
        <div className="logo_box">
          <img src={logo_main} className="logo_main" />
          <h6 className="text_under_logo">APLICĂ ACUM</h6>
          <h1 className="time_under_logo">00:00</h1>
        </div>
        <VectorsSvg_left className="vectors" />
      </div>
      <h1 className="prizes_title">PREMII</h1>
      <h1 className="hackaton_title">Hackathon</h1>

      <div className="enum_prizes">
        <div className="prize">
          <h1>Premiul II</h1>
          <h2 className="prize_money">XXXX€</h2>
        </div>
        <div className="prize">
          <h1>Premiul I</h1>
          <h2 className="prize_money">XXXX€</h2>
        </div>
        <div className="prize">
          <h1>Premiul III</h1>
          <h2 className="prize_money">XXXX€</h2>
        </div>
      </div>


      <h1 className="hackaton_title">Challenge</h1>

      <div className="enum_prizes">
        <div className="prize">
          <h1>Premiul II</h1>
          <h2 className="prize_money">XXXX€</h2>
        </div>
        <div className="prize">
          <h1>Premiul I</h1>
          <h2 className="prize_money">XXXX€</h2>
        </div>
        <div className="prize">
          <h1>Premiul III</h1>
          <h2 className="prize_money">XXXX€</h2>
        </div>
      </div>

    <div className="social_icons">
      <img src={facebook} alt="Facebook" className="icon" />
      <img src={instagram} alt="Instagram" className="icon" />
      <img src={tiktok} alt="TikTok" className="icon" />
      <img src={linkedIn} alt="LinkedIn" className="icon" />
    </div>
    
    <div className="contact_info">
    <p><img src={locatie_icon} alt="Locație" className="info_icon" /> Splaiul Independenței, nr.313, AN204bis, UPB</p>
    <p><img src={phone_icon} alt="Telefon" className="info_icon" /> 0770897452</p>
  </div>


    </div>
  );
}

export default App;
