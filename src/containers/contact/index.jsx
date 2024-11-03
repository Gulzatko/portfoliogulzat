import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageheaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageheaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
           >
           <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div className="nameWrapper">
                <input name="name" className="inputName" type={"text"} />
                <label htmlFor="name" className="nameLabel">Name</label>
              </div>
              <div className="emailWrapper">
              <input name="email" className="inputEmail" type={"email"} />
              <label htmlFor="email" className="emailLabel">Email</label>
              </div>
              <div className="descriptionWrapper">
              <input name="description" className="inputdescription" type={'text'}/>
              <label htmlFor="description" className="descriptionLabel">Name</label>
              </div>
            </div>
            <button>Submit</button>
           </div>
           </Animate>
      </div>
    </section>
  );
};
export default Contact;
