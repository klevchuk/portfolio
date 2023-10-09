import React from 'react';
import {Logo} from "../../componend/logo/Logo";
import {Container} from "../../componend/Container";
import {FlexWrapper} from "../../componend/FlexWrapper";
import {DesktopMenu} from "./headerMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        /* passing an empty array as the dependencies of the effect will cause this
           effect to only run when the component mounts, and not each time it updates.
           We only want the listener to be added once */
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
