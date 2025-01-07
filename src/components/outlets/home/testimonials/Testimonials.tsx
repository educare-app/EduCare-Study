import { useState } from 'react';
import One from '../../../../assets/schools/one-min.png';
import Four from '../../../../assets/schools/four-min.png';
import Six from '../../../../assets/schools/six-min.png'
import Seven from '../../../../assets/schools/seven-min.png'
import Nine from '../../../../assets/schools/nine-min.png'

import Right from '../../../../assets/right-arrow.png';

import Crousal from './crousal/Crousal';
import './testimonials.css';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      path: One,
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, eveniet ab. Suscipit voluptatibus voluptatem corporis doloribus, cumque vel atque optio quis saepe odio obcaecati facere illum, accusantium architecto aut odit amet quos aliquam nostrum id. Inventore fugit doloremque blanditiis tempora, tempore maxime, officia pariatur, nesciunt eligendi corporis quis hic ullam id ipsa distinctio animi labore et soluta consequatur quam culpa vel at atque! Non et doloremque laboriosam asperiores vero corrupti expedita architecto? Blanditiis esse quaerat odio odit quisquam? Laborum distinctio minima sapiente veritatis autem illum recusandae, maiores eius vitae ad ea sint amet, facilis deleniti? Eum reiciendis facilis inventore unde?',
    },
    {
      path: Four,
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, eveniet ab. Suscipit voluptatibus voluptatem corporis doloribus, cumque vel atque optio quis saepe odio obcaecati facere illum, accusantium architecto aut odit amet quos aliquam nostrum id. Inventore fugit doloremque blanditiis tempora, tempore maxime, officia pariatur, nesciunt eligendi corporis quis hic ullam id ipsa distinctio animi labore et soluta consequatur quam culpa vel at atque! Non et doloremque laboriosam asperiores vero corrupti expedita architecto? Blanditiis esse quaerat odio odit quisquam? Laborum distinctio minima sapiente veritatis autem illum recusandae, maiores eius vitae ad ea sint amet, facilis deleniti? Eum reiciendis facilis inventore unde?',
    },
    {
      path: Six,
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, eveniet ab. Suscipit voluptatibus voluptatem corporis doloribus, cumque vel atque optio quis saepe odio obcaecati facere illum, accusantium architecto aut odit amet quos aliquam nostrum id. Inventore fugit doloremque blanditiis tempora, tempore maxime, officia pariatur, nesciunt eligendi corporis quis hic ullam id ipsa distinctio animi labore et soluta consequatur quam culpa vel at atque! Non et doloremque laboriosam asperiores vero corrupti expedita architecto? Blanditiis esse quaerat odio odit quisquam? Laborum distinctio minima sapiente veritatis autem illum recusandae, maiores eius vitae ad ea sint amet, facilis deleniti? Eum reiciendis facilis inventore unde?',
    },
    {
      path: Seven,
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, eveniet ab. Suscipit voluptatibus voluptatem corporis doloribus, cumque vel atque optio quis saepe odio obcaecati facere illum, accusantium architecto aut odit amet quos aliquam nostrum id. Inventore fugit doloremque blanditiis tempora, tempore maxime, officia pariatur, nesciunt eligendi corporis quis hic ullam id ipsa distinctio animi labore et soluta consequatur quam culpa vel at atque! Non et doloremque laboriosam asperiores vero corrupti expedita architecto? Blanditiis esse quaerat odio odit quisquam? Laborum distinctio minima sapiente veritatis autem illum recusandae, maiores eius vitae ad ea sint amet, facilis deleniti? Eum reiciendis facilis inventore unde?',
    },
    {
      path: Nine,
      message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, eveniet ab. Suscipit voluptatibus voluptatem corporis doloribus, cumque vel atque optio quis saepe odio obcaecati facere illum, accusantium architecto aut odit amet quos aliquam nostrum id. Inventore fugit doloremque blanditiis tempora, tempore maxime, officia pariatur, nesciunt eligendi corporis quis hic ullam id ipsa distinctio animi labore et soluta consequatur quam culpa vel at atque! Non et doloremque laboriosam asperiores vero corrupti expedita architecto? Blanditiis esse quaerat odio odit quisquam? Laborum distinctio minima sapiente veritatis autem illum recusandae, maiores eius vitae ad ea sint amet, facilis deleniti? Eum reiciendis facilis inventore unde?',
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="testimonial-section-wrapper">
      <div className="testimonial-container">
        <div className="testimonial-heading">
          <p id="test-heading">Be a part of the community</p>
        </div>
        <div className="crousal-wrapper">
          <div
            className="crousal-slides"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
              display: 'flex', // Ensures all slides are in a row
            }}
          >
            {slides.map((slide, index) => (
              <Crousal key={index} path={slide.path} message={slide.message} />
            ))}
          </div>
        </div>
      </div>
      <div className="crousal-btn-container">
        <button id="arrow-btn" onClick={handleNextSlide}>
          <img src={Right} alt="right-arrow" id="btn" />
        </button>
      </div>
      
    </div>
  );
}

export default Testimonials;
