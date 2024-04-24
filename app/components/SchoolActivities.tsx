import Image from "next/image";
import React from "react";

function SchoolActivities() {
  const activities = [
    {
      title: "Mass",
      img: "/image/activities/prayer.jpg",
      staff: "Rev fr Titus",
    },
    {
      title: "Computer Class",
      img: "/image/activities/computer.jpg",
      staff: "Stanley Okafor(M.Sc)",
    },
    {
      title: "Science Class",
      img: "/image/activities/science.jpg",
      staff: "Emeka John(B.Sc)",
    },
    {
      title: "Basket Ball",
      img: "/image/activities/basketball.jpg",
      staff: "Ebube Ireneaus(B.Tech)",
    },
    {
      title: "Art and Creativity",
      img: "/image/activities/art.jpg",
      staff: "Edward Madaki(Phd)",
    },
    {
      title: "Football",
      img: "/image/activities/football.webp",
      staff: "Yusuf Hassan(B.Sc)",
    },
  ];
  return (
    <div className="bg-slate-200">
      <div className="text-center py-28 mb-5  max-w-2xl mx-auto px-5">
        <h2 className="text-5xl font-extrabold mb-6" data-aos="flip-down">Our Popular Activities</h2>
        <p data-aos="flip-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          voluptatibus vitae minus tempora. Nobis voluptas nemo voluptatibus,
          cupiditate quasi numquam!
        </p>
      </div>
      <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 px-7 lg:px-16">
        {activities.map((act) => (
          <li key={act.title} className="w-full !bg-white shadow-md rounded-md" data-aos="fade-up">
            <div style={{width: '100%', height: 250, position: 'relative', overflow:'hidden'}}>
              <Image
                src={act.img}
                alt={act.title}
                layout="fill"
                className="mx-auto object-cover rounded-md hover:rotate-12  hover:!scale-125 transition-all ease-in-out duration-300"
              />
            </div>
            <div className="px-10 py-10">
                <h2 className="text-lg font-bold mb-3">{act.title}</h2> 
                <p>
                    <span className="font-semibold text-black/50">Teacher</span> -  
                    <span className="text-orange-500 font-bold"> {act.staff}</span>
                </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SchoolActivities;
