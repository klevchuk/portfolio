import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componend/SectionTitle";
import {Icon} from "../../../componend/icon/Icon";
import {Slider} from "../../../componend/slider/Slider";
import {FlexWrapper} from "../../../componend/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quote"}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #aeb9ff;
  min-height: 50vh;
`