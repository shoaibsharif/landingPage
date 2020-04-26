import React from "react";

const Speciality = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            {/* blog title section */}
            <div className="speacialty-title-section mb-60">
              <div className="speacialty-title">
                <h2>OUR SPEACIALTY</h2>
              </div>
              <p>
                We understand that the requirements for the same position differ
                from one industry to another. Thus, our search is conducted
                according to your business needs and specific job profile.
                Whether you’re a startup looking to build a team, or a
                multinational company looking for new hires, we can find you the
                candidate that can easily blend in. Even though we have the
                means to hire for any job profile; we excel in hiring
                professionals in the following sectors:
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* speacialty-item */}
          <div className="col-md-6">
            <div className="speacialty-item">
              <ul>
                <li>
                  <a href="/">Banking</a>
                </li>
                <li>
                  <a href="/">Information Technology</a>
                </li>
                <li>
                  <a href="/">Education</a>
                </li>
                <li>
                  <a href="/">Education</a>
                </li>
                <li>
                  <a href="/">Education</a>
                </li>
              </ul>
            </div>
          </div>
          {/* speacialty-item */}
          <div className="col-md-6">
            <div className="speacialty-item">
              <ul>
                <li>
                  <a href="/">Media &amp; Advertisement</a>
                </li>
                <li>
                  <a href="/">Oil &amp; Gas </a>
                </li>
                <li>
                  <a href="/">Telecommunication</a>
                </li>
                <li>
                  <a href="/">Telecommunication</a>
                </li>
                <li>
                  <a href="/">Telecommunication</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
