import React from "react";
import Banner from "assets/img/banner-bg-3.jpg";
const Team = () => {
  return (
    <div className="teem-sec" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <div className="teem-content">
              <h2>We love what we do</h2>
              <p>
                Our goal is to revolutionize the way recruitment happens in the
                region by introducing advanced AI tools into the process.
                Through these tools, recruitment will be less dependent on CVs
                and more focused on candidates’ competence and abilities. By
                doing so, TalentScript removes cultural and personal biases in
                recruitment as well as improves the quality of hiring decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
