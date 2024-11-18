import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/gallery_1.jpg";
import img2 from "../assets/gallery_2.jpg";
import img3 from "../assets/gallery_3.jpg";
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      className="rounded-2xl"
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
    >
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
  );
};

export default Banner;
