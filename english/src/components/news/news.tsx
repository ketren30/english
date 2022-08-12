import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../type';
import { SwiperSlide } from 'swiper/react';


export const News: React.FC = () => {
    const isLogged = useSelector ((state: types.MainState) => state.logging.isLogged);
    return (
       
    )
}