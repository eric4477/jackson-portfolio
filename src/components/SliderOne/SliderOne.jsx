import "./SliderOne.css";

function SliderOne() {
  return (
    <div className="slider-one vh-100 d-flex flex-column justify-content-center">
      <div className="container text-center text-lg-start">
        <h1 class="text-lg-start text-center">
          Hi! <span className="d-block">Im Jackson</span>
        </h1>
        <button type="button" className="btn btn-transparent">
          download cv <i class="fa-solid fa-download"></i>
        </button>
      </div>
    </div>
  );
}

export default SliderOne;
