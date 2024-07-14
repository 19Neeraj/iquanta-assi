import React from 'react';
import Slider from 'react-slick';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container mx-auto mt-8">
      <Slider {...settings}>
        <div>
          <img src="/images/pegasus41.png" alt="Nike Pegasus 41" className="w-full" />
          <p className="text-center mt-2">Nike Pegasus 41</p>
        </div>
        <div>
          <img src="/images/gtHustle3.png" alt="Nike G.T. Hustle 3" className="w-full" />
          <p className="text-center mt-2">Nike G.T. Hustle 3</p>
        </div>
        <div>
          <img src="/images/alphafly3.png" alt="Nike Alphafly 3" className="w-full" />
          <p className="text-center mt-2">Nike Alphafly 3</p>
        </div>
      </Slider>
    </div>
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow slick-next`}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow slick-prev`}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

export default SimpleSlider;
