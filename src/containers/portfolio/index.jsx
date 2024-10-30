import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../img/cinema.jpeg";
import ImageTwo from "../../img/giphy.jpeg";
import ImageThree from "../../img/codes.jpg";
import ImageFour from "../../img/ecomerce.jpg";
import ImageFive from "../../img/image5.jpeg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Neobis-front-cinema",
    image: ImageOne,
  },

  {
    id: 3,
    name: "giphy_api",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "stopwatchApp",
    image: ImageThree,
  },
  {
    id: 4,
    name: "new_osh",
    image: ImageFour,
  },
  {
    id: 5,
    name: "portfolio",
    image: ImageFive,
  },
];
const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {

  
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li key={item.filterId}>{item.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {portfolioData.map((item) => (
            <div className="portfolio__content__cards__item" key={item.id}>
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href="">
                  <img alt="dummy" src={item.image} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
