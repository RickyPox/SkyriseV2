import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';

export default function Ourwork(){
    return(
        <div>
            <div>
                <h1 className="Ourwork">Our Work</h1>
                <p className="w-1/3">Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
                    Nullam eget diam nec est facilisi faucibus. 
                    Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.</p>
            </div>
            <div>
                <Swiper modules={[Navigation, Pagination]}>
                    <SwiperSlide><img src="/YugaLabs.png"></img></SwiperSlide>
                    <SwiperSlide><img src="/YugaLabs.png"></img></SwiperSlide>
                    <SwiperSlide><img src="/YugaLabs.png"></img></SwiperSlide>
                    <SwiperSlide><img src="/YugaLabs.png"></img></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}