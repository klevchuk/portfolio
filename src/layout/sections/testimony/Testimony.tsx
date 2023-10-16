import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componend/SectionTitle";
import {Icon} from "../../../componend/icon/Icon";
import {Slider} from "../../../componend/slider/Slider";
import {FlexWrapper} from "../../../componend/FlexWrapper";
import {Container} from "../../../componend/Container";
import { S } from '../skills/Skills_Styles';

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quote"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #aeb9ff;
  min-height: 50vh;


  ${S.IconWrapper} {
    margin: 28px 0 72px;
  }
`