import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../img/cinema.jpeg";
import ImageTwo from "../../img/giphy.jpeg";
import ImageThree from "../../img/codes.jpg";
import ImageFour from "../../img/ecomerce.jpg";
import ImageFive from "../../img/image5.jpeg";
import "./styles.scss";
import { useState } from "react";

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
    id: 2,
    name: "stopwatchApp",
    image: ImageThree,
  },
  {
    id: 2,
    name: "new_osh",
    image: ImageFour,
  },
  {
    id: 3,
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
  const [filtredvalue, setFiltredValue] = useState(1);

  function handleFilter(currentId) {
    setFiltredValue(currentId);
  }
  console.log("------");
  console.log(filtredvalue);
  console.log("__________");

  const filteredItems =
    filtredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filtredvalue);

  console.log(filteredItems);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li className={item.filterId === filtredvalue ? 'active' : ''}  onClick={() => handleFilter(item.filterId)} key={item.filterId}>
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
            >
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
