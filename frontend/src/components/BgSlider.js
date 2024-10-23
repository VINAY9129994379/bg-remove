import React, { useState } from 'react';
import './BgSlider.css';
import { assets } from '../assets/assets';

function BgSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="bgslider">
      {/* Heading */}
      <h1 className="bg-slider-h">
        Steps to remove the background<br />
        image in seconds
      </h1>

      {/* Container for the slider and images */}
      <div className="bgslider-wrapper">
        {/* Background image */}
        <div className="bgslider-image">
          <img
            src={assets.image_w_bg}
            style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0)` }}
            alt="Background"
          />
        </div>

        {/* Foreground image */}
        <div className="bgslider-image">
          <img
            src={assets.image_wo_bg}
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            alt="Foreground"
          />
        </div>

        {/* Slider */}
        <div className="bgslider-slider">
          <input
            type="range"
            min={0}
            max={100}
            value={sliderPosition}
            onChange={handleSliderChange}
          />
        </div>
      </div>
    </div>
  );
}

export default BgSlider;
