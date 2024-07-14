import "./Skills.css";

function Skills() {
  return (
    <div className="skills container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100">
      <p className="subheading">MY SPECIALTY</p>
      <h2 className="heading">MY SKILLS</h2>
      <p className="skills-text">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h3 className="mb-2 progress-title">Photoshop</h3>
          <div className="progress color-1">
            <div
              role="progressbar"
              className="progress-bar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "75%" }}
            ></div>
          </div>
          <h3 className="mb-2 progress-title">HTML5</h3>
          <div className="progress color-2 ">
            <div
              role="progressbar"
              className="progress-bar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "85%" }}
            ></div>
          </div>
          <h3 className="mb-2 progress-title">WordPress</h3>
          <div className="progress color-3 ">
            <div
              role="progressbar"
              className="progress-bar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="mb-2 progress-title">jQuery</h3>
          <div className="progress color-4">
            <div
              role="progressbar"
              className="progress-bar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "60%" }}
            ></div>
          </div>
          <h3 className="mb-2 progress-title">CSS3</h3>
          <div className="progress color-5 ">
            <div
              role="progressbar"
              className="progress-bar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "90%" }}
            ></div>
          </div>
          <h3 className="mb-2 progress-title">SEO</h3>
          <div className="progress color-6 ">
            <div
              role="progressbar"
              className="progress-bar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
