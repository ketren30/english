import React from 'react';
import kate from '../../images/kate1.jpg';
import arkasha from '../../images/arkasha1.jpg';
import alex from '../../images/alex1.jpg';
import jenya from '../../images/jenya1.jpg';
import lilya from '../../images/lilya1.jpg';
import all from '../../images/all.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './teachers.css';

SwiperCore.use([Navigation, Pagination]);

interface Teacher {
    name: string,
    photo: string,
    description: string
} 

export const Teachers: React.FC = () => {
    const teachers: Teacher[] = [
        {name: 'Митюнина Лилия Владимировна',
        photo: lilya,
        description: ''},
        {name: 'Андронников Аркадий Алексеевич',
        photo: arkasha,
        description: ''},
        {name: 'Андронникова Екатерина Юрьевна',
        photo: kate,
        description: 'Опыт работы индивидульный подход, TKT бла бла'},
        {name: 'Синяков Алексей Константинович',
        photo: alex,
        description: ''},
        {name: 'Головина Евгения Александровна',
        photo: jenya,
        description: ''}
    ];
    let slides=[];
    for (let i=0; i<teachers.length; i++) {
      console.log(slides);
      slides.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
        <img src={teachers[i].photo} className="picture" alt={`Slide ${i}`}/>
        <h2 className='header'>{teachers[i].name}</h2>
        <div className='descriprion'>{teachers[i].description}</div>
      </SwiperSlide>
      )
    }
    return (
       <>
        <Swiper
        id="main"
        //thumbs={{ swiper: thumbsSwiper }}
        //controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        {slides}
      </Swiper>
      <div className='pink-back'/>
      <img className='absolute-picture' src={all}/>
      <div className='text-around'>
      Все преподаватели Enjoy English School проходят специальную подготовку. 
      Мы обстоятельно знакомим наших учителей с методикой преподавания, 
      показываем, как наиболее эффективно делиться своими языковыми навыками со студентами. 
      Наша задача – сделать так, чтобы при взаимодействии с преподавателями Enjoy English School 
      студенты приобретали новые знания интуитивно и без стресса.
      </div>
      </>
    )
}