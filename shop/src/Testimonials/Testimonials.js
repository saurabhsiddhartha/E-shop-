import React from "react"; 
import Slider from "react-slick";

const Testimonials = () => {
  const setting = {
    dots: false,
    arrows: false,
    infinite: true,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    puaseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        setting: {
          slideToShow: 3,
          slideToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        setting: {
          slideToShow: 2,
          slideToScroll: 1,
          initialSlider: 2,
        },
      },
      {
        breakpoint: 640,
        setting: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  const TestimonialsData = [
    {
      id: 1,
      name: "Victor",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, iusto quam tenetur soluta, ab dolorem, eos corporis beatae ducimus",
      img: "",
    },
    {
      id: 1,
      name: "Vaibhav",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, iusto quam tenetur soluta, ab dolorem, eos corporis beatae ducimus",
      img: "",
    },
    {
      id: 3,
      name: "Vivek",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, iusto quam tenetur soluta, ab dolorem, eos corporis beatae ducimus",
      img: "",
    },
    {
      id: 4,
      name: "Vikas",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, iusto quam tenetur soluta, ab dolorem, eos corporis beatae ducimus",
      img: "",
    },
  ];
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testomonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            hic aliquam, recusandae dolorem nam cum magni? Aliquid eos similique
            nisi unde.
          </p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...setting}>
            {TestimonialsData.map((data) => (
              <div className="my-6">
                <div 
                key={data.id}
                className ="flex flex-col-4 shadow-lg py-8 px-6 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-black/80 dark:text-light text-gray-500">
                        {data.description}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 test-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="test-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
