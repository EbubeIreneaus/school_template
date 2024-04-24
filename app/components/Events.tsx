import { Card } from "primereact/card";
import React, {useEffect} from "react";
import AOS from 'aos'

function Event() {
    useEffect(() => {
      AOS.init();
    }, []);
  
  return (
    <div className="my-20 py-10 bg-slate-100">
      <div className="text-center py-20 mb-2  max-w-2xl mx-auto px-5">
        <h2 className="text-5xl font-extrabold mb-6" data-aos="flip-down">
          Our Upcomming Events
        </h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          voluptatibus vitae minus tempora. Nobis voluptas nemo voluptatibus,
          cupiditate quasi numquam!
        </p>
      </div>
      <ul className="mx-5 grid lg:grid-cols-2 gap-4">
        <li className=" bg-white shadow-md mb-5 rounded-lg" data-aos="fade-up">
          <span className="float-right w-20 px-4 py-4 bg-orange-500 text-center font-bold text-white rounded-tr-lg">
            10 Jan
          </span>
          <div className="py-10 px-10">
            <h2 className="text-3xl font-bold ">
              OneNote for Windows 10 Essential Training
            </h2>
            <ul className="flex gap-10 *:font-extrabold my-7 text-black/50 text-sm md:px-5">
              <li className="flex gap-2 items-center">
                <i className="pi pi-clock font-bold"></i>
                <span>8:00AM - 12:00AM</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="pi pi-map"></i>
                <span>Hall - A | Broklyn Audiitorium</span>
              </li>
            </ul>

            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              iusto dolor deleniti tempore in pariatur earum ipsum nesciunt
              alias commodi nemo repudiandae error esse adipisci, tenetur
              dolores aut nisi! Aut a assumenda corporis. Fugit sit facere a at
              inventore aliquid.
            </p>
          </div>
        </li>
        <li className=" bg-white shadow-md mb-5 rounded-lg" data-aos="fade-up">
          <span className="float-right w-20 px-4 py-4 bg-orange-500 text-center font-bold text-white rounded-tr-lg">
            12 Jan
          </span>
          <div className="py-10 px-10">
            <h2 className="text-3xl font-bold ">
              Magazine Design Start to Finish: The Inside Pages
            </h2>
            <ul className="flex gap-10 *:font-extrabold my-7 text-black/50 text-sm md:px-5">
              <li className="flex gap-2 items-center">
                <i className="pi pi-clock font-bold"></i>
                <span>8:00AM - 12:00AM</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="pi pi-map"></i>
                <span>Hall - A | Broklyn Audiitorium</span>
              </li>
            </ul>

            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              iusto dolor deleniti tempore in pariatur earum ipsum nesciunt
              alias commodi nemo repudiandae error esse adipisci, tenetur
              dolores aut nisi! Aut a assumenda corporis. Fugit sit facere a at
              inventore aliquid.
            </p>
          </div>
        </li>
        <li className=" bg-white shadow-md mb-5 rounded-lg" data-aos="fade-up">
          <span className="float-right w-20 px-4 py-4 bg-orange-500 text-center font-bold text-white rounded-tr-lg">
            12 Jan
          </span>
          <div className="py-10 px-10">
            <h2 className="text-3xl font-bold ">
              Robotic Process Automation Tech Primer
            </h2>
            <ul className="flex gap-10 *:font-extrabold my-7 text-black/50 text-sm md:px-5">
              <li className="flex gap-2 items-center">
                <i className="pi pi-clock font-bold"></i>
                <span>8:00AM - 12:00AM</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="pi pi-map"></i>
                <span>Hall - A | Broklyn Audiitorium</span>
              </li>
            </ul>

            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              iusto dolor deleniti tempore in pariatur earum ipsum nesciunt
              alias commodi nemo repudiandae error esse adipisci, tenetur
              dolores aut nisi! Aut a assumenda corporis. Fugit sit facere a at
              inventore aliquid.
            </p>
          </div>
        </li>
        <li className=" bg-white shadow-md mb-5 rounded-lg" data-aos="fade-up">
          <span className="float-right w-20 px-4 py-4 bg-orange-500 text-center font-bold text-white rounded-tr-lg">
            13 Jan
          </span>
          <div className="py-10 px-10">
            <h2 className="text-3xl font-bold ">
              Matriculation For New Student
            </h2>
            <ul className="flex gap-10 *:font-extrabold my-7 text-black/50 text-sm md:px-5">
              <li className="flex gap-2 items-center">
                <i className="pi pi-clock font-bold"></i>
                <span>8:00AM - 12:00AM</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="pi pi-map"></i>
                <span>Hall - A | Broklyn Audiitorium</span>
              </li>
            </ul>

            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              iusto dolor deleniti tempore in pariatur earum ipsum nesciunt
              alias commodi nemo repudiandae error esse adipisci, tenetur
              dolores aut nisi! Aut a assumenda corporis. Fugit sit facere a at
              inventore aliquid.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Event;
