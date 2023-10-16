import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import { S } from './Slider_Styles';

export const Slider = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet cupiditate eos esse
                        explicabo harum itaque iusto magnam, magni nesciunt, nihil officia porro quae rerum sapiente
                        sequi, similique tempore veniam!</S.Text>
                    <S.Name>@ivan ivanov</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span> </span>
                <span className={"active"}> </span>
                <span> </span>
            </S.Pagination>
        </S.Slider>
    );
};

