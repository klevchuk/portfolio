import React from 'react';
import {Logo} from "../../componend/logo/Logo";
import {Container} from "../../componend/Container";
import {FlexWrapper} from "../../componend/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>

                    {width < breakpoint
                        ? <MobileMenu menuItems={items}/>
                        : <DesktopMenu menuItems={items}/>}


                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
