import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import pic1 from "../img/outdoor1.JPG"
import pic2 from "../img/screche2.JPG"
import pic3 from "../img/children2.JPG"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "../css/style.css"


export const InfantSchoolImg = () => {
    return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      >
        <SwiperSlide> <img src={pic1} width='100%'/>  </SwiperSlide>
        <SwiperSlide> <img src={pic2} width='100%'/>  </SwiperSlide>
        <SwiperSlide> <img src={pic3} width='100%'/>  </SwiperSlide>

      </Swiper>
    );
  };