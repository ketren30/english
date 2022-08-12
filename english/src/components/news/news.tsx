import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../type';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import { ThunkDispatch } from 'redux-thunk';
import { FetchNews } from '../../store/actionCreators';
import './news.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export const News: React.FC = () => {
    const isLogged = useSelector ((state: types.MainState) => state.logging.isLogged);
    const dispatch: ThunkDispatch<{}, void, types.MainAction> = useDispatch();
    const news = useSelector((state: types.MainState) => state.news.news);
    const loading = useSelector((state: types.MainState) => state.news.loading);
    //const [thumbSwiper, setThumbsSwiper] = useState(null);
    //const [slides, setSlides] = useState<any>(null);
    useEffect(()=> {
        dispatch(FetchNews());
    }, [dispatch]);

    const ourNews = news.map((elem: types.News, i: number)=>{
        return (
            <div className='news-wrapper' key={i}><>
                <h3>{elem.header}</h3>
                <p>{elem.text}</p>
                <Swiper className='swiper1'
                    navigation
                    id="thumbs"
                    spaceBetween={5}
                    slidesPerView={3}
                >
                    {elem.photos.map((item, index: number)=> {
                        return <SwiperSlide key={`slide-${index}`} tag="li">
                                   <img className='thumbs-image' src={item} alt={`Slide ${index+1}`}/>
                        </SwiperSlide> })}      
                </Swiper>
            </></div>
        )
    })
        
    return (<>
        {loading && <h3>Loading...</h3>}
        {!loading && ourNews}
    </>)
}