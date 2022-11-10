import "./about.css";
import { Button } from "reactstrap";
import Ava from "../../assets/avatar-5.jpg";
const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Ava} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I live in Quang Nam, Vietnam. Currently, I am studying at FPT
          University Da Nang, majoring in software engineering.
        </p>
        <p className="a-desc">
          With logical thinking skills & a creative mindset, I want to become
          one of the key members who bring an effective IT solution to the
          customers. Each day developing my own skills is my goal. I will try to
          complete the assigned tasks well, learn more professional experience
          and constantly strive.
        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <Button color="primary">
              <a href="#">Download CV</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
