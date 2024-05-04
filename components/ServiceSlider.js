//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

//import required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Web Design",
    description:
      "Our experienced team is ready to create a unique and efficient website for you. Using the latest technologies and deep technical expertise, we design responsive websites that meet your needs. We can also incorporate advanced features such as online stores, and more. Our aim is to provide you with the best web design service possible..",
  },
  {
    icon: <RxDesktop />,
    title: "Programming",
    description:
      "Programming expertise in various programming languages is available to develop customized software and applications with optimal performance and efficiency for you..",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      " Website analysis, keyword research, content optimization, technical optimization, speed optimization, link structure improvement, user experience enhancement, content marketing guidance, performance tracking, and evaluation..",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0,15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title and desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350] leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent trabsutuib-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
