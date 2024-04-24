import React from "react";

function SchoolValue() {
  return (
    <div className="min-h-screen w-full bg-[url('/image/aboutbg.jpg')] bg-cover bg-center !bg-fixed my-20">
      <ul className="h-full text-white/80 relative ">
        {/* our Mission */}
        <li className="w-full min-h-[500px] !h-full grid lg:grid-cols-2">
          <div className="bg-transparent w-full min-h-[100px]"></div>
          <div className="bg-slate-900 h-full flex justify-center flex-col px-10 py-16 md:py-10 lg:py-1">
            <div className="mb-10 -mt-5">
              <h2
                className="text-3xl font-bold uppercase mb-2.5"
                data-aos="flip-up"
              >
                Our Mission
              </h2>
              <span
                className="block w-[100px] bg-orange-500 py-0.5 "
                data-aos="fade-left"
              ></span>
            </div>

            <p className="" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae alias atque impedit corporis quo eos voluptates eaque
              nostrum tempora eveniet aspernatur, possimus ullam quos distinctio
              ea dignissimos aliquid, harum doloribus. Ipsa ea reprehenderit rem
              blanditiis ab itaque beatae accusamus, reiciendis doloribus
              libero. Sunt distinctio dignissimos nisi voluptas voluptate
              facilis culpa harum doloribus. Ipsa ea reprehenderit rem
              blanditiis ab itaque beatae accusamus, reiciendis doloribus
              libero. Sunt distinctio dignissimos nisi voluptas voluptate
              facilis culpa.
            </p>
          </div>
        </li>

        {/* our vission */}
        <li className="w-full min-h-[500px] grid lg:grid-cols-2">
          <div className="bg-slate-900 h-full flex justify-center flex-col px-10 py-16 md:py-10 lg:py-1 !order-2 !lg:order-1">
            <div className="mb-10 -mt-5">
              <h2
                className="text-3xl font-bold uppercase mb-2.5"
                data-aos="flip-up"
              >
                Our Vission
              </h2>
              <span
                className="block w-[100px] bg-orange-500 py-0.5 "
                data-aos="fade-right"
              ></span>
            </div>

            <p className="" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae alias atque impedit corporis quo eos voluptates eaque
              nostrum tempora eveniet aspernatur, possimus ullam quos distinctio
              ea dignissimos aliquid, harum doloribus. Ipsa ea reprehenderit rem
              blanditiis ab itaque beatae accusamus, reiciendis doloribus
              libero. Sunt distinctio dignissimos nisi voluptas voluptate
              facilis culpa harum doloribus. Ipsa ea reprehenderit rem
              blanditiis ab itaque beatae accusamus, reiciendis doloribus
              libero. Sunt distinctio dignissimos nisi voluptas voluptate
              facilis culpa.
            </p>
          </div>
          <div className="!bg-transparent w-full h-full min-h-[100px] !order-1 !lg:order-2"></div>
        </li>

        {/* Anthem */}
        <li className="w-full min-h-[500px] grid lg:grid-cols-2">
          <div className="bg-transparent !w-full !h-full min-h-[100px]"></div>
          <div className="bg-slate-900 h-full flex justify-center flex-col px-10 py-16 md:py-10 lg:py-1">
            <div className="mb-10 -mt-5">
              <h2
                className="text-3xl font-bold uppercase mb-2.5"
                data-aos="flip-up"
              >
                Our Anthem
              </h2>
              <span
                className="block w-[100px] bg-orange-500 py-0.5 "
                data-aos="fade-left"
              ></span>
            </div>

            <p className="" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              vero soluta, ea dolore hic illo iure possimus minus optio
              laboriosam nulla, dolores reiciendis ad temporibus!
            </p>
            <br />
            <p data-aos="fade-up">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates, repellendus provident. Vitae libero consectetur facere
              quas earum, veritatis explicabo corporis delectus ab
              exercitationem officiis? Nemo!
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SchoolValue;
