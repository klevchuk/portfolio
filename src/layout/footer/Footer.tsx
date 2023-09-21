import React from 'react';
import styled from "styled-components";
import {Icon} from "../../componend/icon/Icon";
import {FlexWrapper} from "../../componend/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Vlad</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"insta"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"telegram"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"vk"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"linkedin"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Vlad Klevchuk, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #ffd8a5;
  min-height: 20vh;
`
const Name = styled.span`

`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`

const SocialItem = styled.li`

`
