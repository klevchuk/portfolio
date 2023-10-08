import React from 'react';
import {Logo} from "../../componend/logo/Logo";
import {Container} from "../../componend/Container";
import {FlexWrapper} from "../../componend/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from "./Header_Styles"

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
