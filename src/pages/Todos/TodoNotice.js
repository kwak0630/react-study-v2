import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const TodoNoticeBlock = styled.div`
    background: #ffe281;
    .swiper-slide{
        padding: 20px 0 30px;
        text-align: center;
    }
    .swiper-button-prev,
    .swiper-button-next{
        &:after{
            font-size:15px;
            color:#000;
        }

    }
    .swiper-pagination{
        bottom: 5px !important;
        .swiper-pagination-bullet{
            &.swiper-pagination-bullet-active{
                background-color:#ff9800;
            }
        }
    }
`;


function TodoNotice(){
    return (
        <TodoNoticeBlock>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                navigation
                pagination={{ clickable: true }} 
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }}
            >
                <SwiperSlide>꼭 완료하기!</SwiperSlide>
                <SwiperSlide>😘</SwiperSlide>
                <SwiperSlide>✅ 이건 투두 리스트 ✅</SwiperSlide>
                <SwiperSlide>🐣 sally</SwiperSlide>
             </Swiper>
        </TodoNoticeBlock>
    )
}

export default TodoNotice;