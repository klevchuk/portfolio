import React from 'react';
import photo from "./../../../assets/images/avatar.jpg"
import {FlexWrapper} from "../../../componend/FlexWrapper";
import {Container} from "../../../componend/Container";
import { S } from './Main_Styles';


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Vlad Klevchuk</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                    <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

