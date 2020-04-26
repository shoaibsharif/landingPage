import React from "react";
import ImageTalent from "assets/img/talent-pool.png";

const HeroContent = ({ contents }) => {
  return (
    <div className="choose-us-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <div className="section-title text-center mb-60">
              <h2>WHY RECRUITERS CHOOSE US</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* talent pool */}
          {contents.map(({ title, description }, index) => (
            <TalentEach
              key={`${title}${index}`}
              title={title}
              description={description}
              image={ImageTalent}
            />
          ))}
          {/* vetting pool */}
        </div>
      </div>
    </div>
  );
};

const TalentEach = ({ image, title, description }) => (
  <div className="col-md-6">
    <div className="talent-content">
      <div className="thumb-img">
        <img src={image} alt="thumb" />
      </div>
      <h4>{title}</h4>
      <p> {description}</p>
    </div>
  </div>
);

export default HeroContent;
