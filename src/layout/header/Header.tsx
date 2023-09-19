import React from 'react';
import styled from "styled-components";
import {Logo} from "../../componend/logo/Logo";
import {Menu} from "../../componend/menu/Menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #d4ffd3;
  display: flex;
  justify-content: space-between;
`