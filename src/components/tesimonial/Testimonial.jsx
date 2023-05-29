import React from "react";
import Title from "../layouts/Title";
import { testimonialData } from "../../data/data";
import TestimonialSlider from "./TestimonialSlider";
const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="w-full py-16 border-b-black border-b-[1px]"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <TestimonialSlider testimonialData={testimonialData} />
    </section>
  );
};

export default Testimonial;
