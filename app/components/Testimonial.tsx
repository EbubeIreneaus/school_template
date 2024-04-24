"use client"
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

function Testimonial() {
  const splideOptions = {
    type: "loop",
    arrows: false,
    autoplay: true,
    interval: 3000,
    width:"100vw"
  };
  return (
    <div className="min-h-[500px] w-full grid lg:grid-cols-2 gap-y-10 lg:px-10 px-2 bg-slate-100 py-20">
      <div>
        <div className=" px-5 lg:px-10 mb-2  max-w-2xl lg:mx-auto">
          <h2 className="text-5xl font-extrabold mb-1" data-aos="flip-up">
            Our Upcomming Events
          </h2>
          <span
            className="bg-orange-500 w-28 py-1 block mb-4"
            data-aos="fade-right"
          ></span>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptatibus vitae minus tempora. Nobis voluptas nemo voluptatibus,
            cupiditate quasi numquam!
          </p>
        </div>
      </div>
      <div className="w-full">
        <Splide options={splideOptions}>
          <SplideSlide>
            <div className="flex flex-col lg:flex-row h-full border gap-5 py-10 px-5 shadow-md bg-white">
              <img
                src="/image/profilePlaceholder.png"
                alt="Profile pics"
                className="w-28 h-28 rounded-full self-end"
              />
              <p className="text-balance text-black/50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                distinctio incidunt earum laudantium beatae maiores quod maxime
                cumque, sunt odio accusantium animi labore quas placeat
                voluptate nihil dignissimos. Natus debitis vero error maiores
                accusantium, voluptatem quas ipsa veniam rem iusto
                exercitationem deleniti provident cupiditate soluta laboriosam?
                Possimus hic quaerat voluptatem?
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col lg:flex-row  h-full border gap-5 py-10 px-5 shadow-md bg-white">
              <img
                src="/image/profilePlaceholder.png"
                alt="Profile pics"
                className="w-28 h-28 rounded-full self-end"
              />
              <p className="text-balance text-black/50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                distinctio incidunt earum laudantium beatae maiores quod maxime
                cumque, sunt odio accusantium animi labore quas placeat
                voluptate nihil dignissimos. Natus debitis vero error maiores
                accusantium, voluptatem quas ipsa veniam rem iusto
                exercitationem deleniti provident cupiditate soluta laboriosam?
                Possimus hic quaerat voluptatem?
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col lg:flex-row  h-full border gap-5 py-10 px-5 shadow-md bg-white">
              <img
                src="/image/profilePlaceholder.png"
                alt="Profile pics"
                className="w-28 h-28 rounded-full self-end"
              />
              <p className="text-balance text-black/50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                distinctio incidunt earum laudantium beatae maiores quod maxime
                cumque, sunt odio accusantium animi labore quas placeat
                voluptate nihil dignissimos. Natus debitis vero error maiores
                accusantium, voluptatem quas ipsa veniam rem iusto
                exercitationem deleniti provident cupiditate soluta laboriosam?
                Possimus hic quaerat voluptatem?
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Testimonial;
