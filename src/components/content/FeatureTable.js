import React from "react";
import "./FeatureTable.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const FeatureTable = () => {
  const features = [
    {
      title: "ESA-Friendly Housing",
      benefits: [
        "Provides support for mental health by allowing Emotional Support Animals",
        "Offers a stable living situation for those with ESAs",
        "Having an ESA can help alleviate symptoms of anxiety and depression",
        "ESAs provide emotional support and companionship for those who live alone",
        "Having an ESA can lead to increased social interaction and physical activity, improving overall well-being",
      ],
    },
    {
      title: "Pet-Friendly Travel Accommodations",
      benefits: [
        "Allows owners to travel with their pets",
        "Provides flexibility for owners who like to travel with their pets",
        "Being able to bring a pet can reduce stress levels while traveling",
        "Traveling with a pet can provide companionship and reduce feelings of loneliness",
        "Spending time with pets can boost mood and reduce anxiety and depression",
      ],
    },
  ];

  return (
    <div className="table-container">
      <div className="inner-table">
        <div className="table-header">
          <div className="table-header-item">{features[0].title}</div>
        </div>
        {features[0].benefits.map((benefit, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">
              <div className="row-icon">
                <IoIosCheckmarkCircleOutline />
              </div>
              <span>{benefit}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="inner-table">
        <div className="table-header">
          <div className="table-header-item">{features[1].title}</div>
        </div>
        {features[1].benefits.map((benefit, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">
              <div className="row-icon">
                <IoIosCheckmarkCircleOutline />
              </div>
              <span>{benefit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTable;
