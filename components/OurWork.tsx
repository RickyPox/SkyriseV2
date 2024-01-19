import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';
import 'swiper/css/bundle';

export default function OurWork(){
    return(
        <div>
            <div>
                <h1 className="Ourwork">Our Work</h1>
                <p className="w-1/3">Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
                    Nullam eget diam nec est facilisi faucibus. 
                    Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.</p>
            </div>
            <div>
                <Swiper
                slidesPerView={2}
                spaceBetween={50}
                loop = {true}
                centeredSlides={true}
                modules={[Pagination]}
                pagination={{ 
                    el: "#bulletContainer",
                    bulletClass:"swipper-bullet-custom-pagination",
                    bulletActiveClass:"swipper-bullet-custom-pagination-active",
                    clickable:true,}}
                >
                    <SwiperSlide>
                        <img className='w-full' src="/YugaLabs.png"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src="/YugaLabs.png"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src="/YugaLabs.png"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src="/YugaLabs.png"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src="/YugaLabs.png"></img>
                    </SwiperSlide>
                </Swiper>
                <div id="bulletContainer" className='flex gap-[10px] justify-center mt-[60px]'></div>
            </div>
        </div>
    )
}