import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { imgs } from "../../constants";


export default function SectionHero({ ...props }) {
  return (
    <section {...props}>
      <div className="container-large  padding-section-large">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-top">
              <h1>
                Precizno
                <span className="hero-accent">iznutra</span>
                <span className="hero-border">prema van.</span>
              </h1>
            </div>
            <div className="hero-bottom">
              <p>
                Petrić Vodoinstalacije primjenjuje inovativni pristup
                vodoinstalacijama: sanaciju kanalizacije epoxy smolom bez
                iskopa, dijamantno bušenje kruna i profesionalno odštopavanje.
                Sve prema planu, s mjerljivim rezultatom.
              </p>
              <Link to="/contact" className="button accent">Zatraži procjenu</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
              }}
              modules={[Pagination, Autoplay]}
              className="heroSwiper"
            >
              {imgs.map((element) => (
                <SwiperSlide>
                  <img fetchPriority="high" src={element} alt={element + " slika!"}></img>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
