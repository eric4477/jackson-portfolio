import "./About.css";

function About() {
  return (
    <div className="about container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100">
      <p className="subheading">about us</p>
      <h2 className="heading">who am i?</h2>
      <p className="about-text">
        <strong>Hi Im Jackson Ford </strong>
        On her way she met a copy. The copy warned the Little Blind Text, that
        where it came from it would have been rewritten a thousand times and
        everything that was left from its origin would be the word (and) and the
        Little Blind Text should turn around and return to its own, safe
        country.
      </p>
      <p className="about-text">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </p>
      <div className="row">
        <div className="col-md-3">
          <div className="skills color-1">
            <span>
              <i className="fa-regular fa-lightbulb"></i>
            </span>
            <h3>Graphic Design</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="skills color-2">
            <span>
              <i className="fa-solid fa-earth-africa"></i>
            </span>
            <h3>Web Design</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="skills color-3">
            <span>
              <i className="fa-solid fa-database"></i>
            </span>
            <h3>Software</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="skills color-4">
            <span>
              <i className="fa-solid fa-mobile-screen-button"></i>
            </span>
            <h3>Application</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
