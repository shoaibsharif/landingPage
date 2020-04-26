import React from "react";
import Banner from "assets/img/banner-bg-1.jpg";
const QualitiveScreen = () => {
  return (
    <div
      className="screening-sec"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="screening-content">
              <h4>Qualitative Screening</h4>
              <p>
                We replace initial interviews and traditional questions with our
                interview bot, AIVA. AIVA acts as our pre-hiring assessment and
                evaluates candidates based on their compatibility to the job’s
                required skills. This allows us to know more about the
                candidates at first sight while also giving candidates a chance
                to show their true capabilities without the first interview
                nerves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitiveScreen;
