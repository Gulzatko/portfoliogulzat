import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageheaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const About = () => {
  const jobSummary =
    "Front End Developer with 2 years of experience in blending the art of design with skill of programming to deliver  an impressive user experinece through efficient website developement,proactive feature optimization, and relentless debugging.Very passionate about aesthetics and UI design.It is imperative that you provide a thorough and professional approach. Web developers build and maintain websites and web applications using programming, design tools and languages such as HTML, CSS,JavaScript and React.js, Next.js frameworks to meet both client and end-user needs.";
  return (
    <section id="about" className="about">
      <PageheaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              <li>
                <span className="title">Name:</span>
                <span className="value">Gulzat Koshbaeva</span>
              </li>
              <li>
                <span className="title">Age:</span>
                <span className="value">38</span>
              </li>
              <li>
                <span className="title">Address:</span>
                <span className="value">Dubai, UAE</span>
              </li>
              <li>
                <span className="title">Email:</span>
                <span className="value">Mamajanovna86@gmail.com</span>
              </li>
              <li>
                <span className="title">Contact No:</span>
                <span className="value"> +971569596746</span>
              </li>
              <li>
                <span className="title">GitHub</span>
                <span className="value">https://github.com/Gulzatko</span>
              </li>
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
