"use client"
import { Big_Shoulders_Text } from "next/font/google";
import Image from "next/image"; 
import {Card} from 'primereact/card'
import SchoolActivities from "./components/SchoolActivities";
import SchoolValue from "./components/SchoolValue";
import Event from "./components/Events";
import Testimonial from "./components/Testimonial";
import AOS from 'aos'
import { useEffect } from "react";

export default function Home() {

  return (
    <div>
      <div
        className="min-h-[calc(100dvh-100px)] w-full bg-[url('/image/homebg.jpg')] bg-cover bg-no-repeat relative
       flex items-center before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black/50 "
      >
        <div className="mx-5 md:mx-12 -mt-20 relative z-40">
          <p className="capitalize font-bold text-white mb-3" data-aos="fade-down">
            The Goal of Education is the Advancement of Knowledge
          </p>
          <h1 className="text-6xl font-bold text-white max-w-lg" data-aos="fade-up">
            Take The First Step Of Knowledge With Us.
          </h1>
        </div>
      </div>

      <ul className="grid lg:grid-cols-3 w-[90%] gap-4 mx-auto text-sm font-bold relative -mt-10 z-30">
        <li className="" data-aos="fade-left">
          <Card className="h-full">
            <Image
              src="/image/nuserystudent.jpg"
              alt="nusery student"
              width={250}
              height={250}
              className="mx-auto"
            />
            <div className="text-center">
              <h2 className="py-5 text-lg font-semibold">
                Nursery &amp; Primary
              </h2>
              <p>
                Stella Maris Nursery and Primary School is a well-established
                independent co-educational school with specialist teachers, a
                rich blend of Nigerian, American and British curriculums as well
                as a reputation for equipping children for success at most of
                the country’s leading and outstanding secondary schools.
              </p>
            </div>
          </Card>
        </li>
        <li className="relative lg:-mt-10" data-aos="fade-up">
          <Card className="h-full">
            <Image
              src="/image/primarystudent.jpg"
              alt="nusery student"
              width={250}
              height={250}
              className="mx-auto"
            />
            <div className="text-center">
              <h2 className="py-5 text-lg font-semibold">Primary</h2>
              <p>
                From the very first moment a child enters the school, he/she
                benefits from an excellent academic education supported by
                highly qualified and experienced specialist staff and a large
                range of musical, creative, sporting and artistic opportunities
                which are essential for children’s all-round education and
                development.
              </p>
            </div>
          </Card>
        </li>
        <li className="" data-aos="fade-right">
          <Card className="h-full">
            <Image
              src="/image/secondarystudent.jpg"
              alt="nusery student"
              width={250}
              height={250}
              className="mx-auto"
            />
            <div className="text-center">
              <h2 className="py-5 text-lg font-semibold">Secondary</h2>
              <p>
                The college has a tradition of excellent teaching and learning
                combined with discipline and traditional values which are the
                bedrock of its existence. Academic results put ourschool College
                amongst the top schools in the country. It is equally well known
                for its sport and also offers superb music, art and drama.
              </p>
            </div>
          </Card>
        </li>
      </ul>

      <SchoolActivities />
      <SchoolValue />
      <Event />
      <Testimonial />
    </div>
  );
}
