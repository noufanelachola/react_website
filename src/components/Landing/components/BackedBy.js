import React from 'react';
import { Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Logo1 from '../../../assets/backup_logo/logo_1.png'
import Logo2 from '../../../assets/backup_logo/logo_2.png'
import Logo3 from '../../../assets/backup_logo/logo_3.png'

const BackedBy = () => {
  return (
    <section className='sectionBackedBy'>
        <div className='content'>
        <p className='wgtReg clrLightGray' style={{textAlign:"center"}}>Recognised and BackedBy</p>
        <div>
            <Swiper 
                spaceBetween={50} // Space between slides
                slidesPerView={'auto'} 
                centeredSlides={true}
                allowTouchMove={false}
                style={{ padding: '0 10px' }} // Add space between slides
            >
                <SwiperSlide style={{width: '120px', display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                    <img
                    src={Logo1}
                    alt="logo 1"
                    style={{ maxWidth: "100%", height: "auto", display: "block" }}
                    />
                </SwiperSlide>
                <SwiperSlide style={{width: '120px', display: 'flex',justifyContent: 'center',alignItems: 'center',}}>            
                    <img
                    src={Logo2}
                    alt="logo 2"
                    style={{ maxWidth: "100%", height: "auto", display: "block" }}
                    />
                </SwiperSlide>
                <SwiperSlide style={{width: '120px', display: 'flex',justifyContent: 'center',alignItems: 'center',}}>            
                    <img
                    src={Logo3}
                    alt="logo 3"
                    style={{ maxWidth: "100%", height: "auto", display: "block" }}
                    />
                </SwiperSlide>
                <SwiperSlide style={{width: '120px', display: 'flex',justifyContent: 'center',alignItems: 'center',}}>            
                    <div
                    style={{
                        padding: "10px 20px",
                        background: "#f0f0f0",
                        borderRadius: "8px",
                    }}
                    >
                    Slide 4
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    </section>
  ) 
}

export default BackedBy