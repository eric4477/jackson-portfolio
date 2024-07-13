import "./SliderTwo.css";

function SliderTwo() {
  return (
    <div className="slider-two vh-100 d-flex flex-column justify-content-center">
      <div className="container text-center text-lg-start">
        <h1 class="text-lg-start text-center">
          I am <span className="d-block">a Designer</span>
        </h1>
        <button type="button" className="btn btn-transparent">
          view portfolio <i class="fa-solid fa-briefcase"></i>
        </button>
      </div>
    </div>
  );
}

export default SliderTwo;
