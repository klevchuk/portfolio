import React from 'react';
import styled from "styled-components";
import {Logo} from "../../componend/logo/Logo";
import {Menu} from "../../componend/menu/Menu";
import {Container} from "../../componend/Container";
import {FlexWrapper} from "../../componend/FlexWrapper";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo/>
                <Menu menuItems={items}/>
                </FlexWrapper>
                </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #d4ffd3;
`