import "./Home.css";
import SliderContainer from "../../components/SliderContainer/SliderContainer";
import SliderOne from "../../components/SliderOne/SliderOne";
import SliderTwo from "../../components/SliderTwo/SliderTwo";

function Home() {
  const sliderComponents = [SliderOne, SliderTwo];
  return (
    <div className="home">
      <SliderContainer components={sliderComponents} />
    </div>
  );
}

export default Home;
