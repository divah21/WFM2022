import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonials.scss';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonials.imgUrl)} alt={testimonials.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials.feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials.name}</h4>
                <h5 className="p-text">{testimonials.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex">
              <HiChevronLeft />
            </div>

            <div className="app__flex" >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
