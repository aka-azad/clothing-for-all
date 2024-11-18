import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";
import { Navigation } from "swiper/modules";

import img1 from "../assets/gallery_1.jpg";
import img2 from "../assets/gallery_2.jpg";
import img3 from "../assets/gallery_3.jpg";

const Banner = () => {
  return (
    // <div className="carousel carousel-center rounded-box">
    //   <div className="carousel-item w-full h-fit">
    //     <img src={img1} alt="Pizza" />
    //   </div>
    //   <div className="carousel-item w-full h-fit">
    //     <img src={img2} alt="Pizza" />
    //   </div>
    //   <div className="carousel-item w-full h-fit">
    //     <img src={img1} alt="Pizza" />
    //   </div>
    //   <div className="carousel-item w-full h-fit">
    //     <img src={img3} alt="Pizza" />
    //   </div>
    //   <div className="carousel-item w-full h-fit">
    //     <img src={img2} alt="Pizza" />
    //   </div>
    // </div>
    <div className="rounded-2xl overflow-hidden animate__animated animate__bounce">
      <Swiper slidesPerView={1} navigation modules={[Navigation]}>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
