import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componend/SectionTitle";
import {Button} from "../../../componend/Button";
import {Container} from "../../../componend/Container";
import {FlexWrapper} from "../../../componend/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #ffe1f5;
`