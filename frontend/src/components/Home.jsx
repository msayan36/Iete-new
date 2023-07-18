import "./styles/home.css";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div className="hero-upper">
        <img src="/iem_logo.jpeg" alt="iem-logo" className="iem-logo" />
        <h1 className="hero-title">IEM-IETE</h1>
        <img src="/iete_logo.jpg" alt="iete-logo" className="iete-logo" />
      </div>
      <div className="hero-middle">
        <h2>STUDENTS' FORUM</h2>
        <h3>[REF. NO.: ISFC-1051]</h3>
        <h3 className="inst-name">
          INSTITUTE OF ENGINEERING AND MANAGEMENT, KOLKATA
        </h3>
      </div>
      <div className="hero-bottom">
        <p>Gurukul Campus, Y-12, Salt Lake</p>
        <p>Electronics Complex, Sector V, Kolkata-700091</p>
        <div className="hero-icons">
          <a
            href="https://www.linkedin.com/in/iem-iete-students-forum-8b3145248/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://www.facebook.com/107098072104931/posts/107100562104682/?substory_index=0&mibextid=ad618h"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
