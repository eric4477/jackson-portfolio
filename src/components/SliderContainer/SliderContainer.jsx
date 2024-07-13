import Slider from "react-slick";

const SliderContainer = ({ components }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {components.map((Component, index) => (
        <div key={index}>
          <Component />
        </div>
      ))}
    </Slider>
  );
};

export default SliderContainer;
