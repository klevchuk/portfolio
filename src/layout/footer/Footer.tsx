import React from 'react';
import styled from "styled-components";
import {Icon} from "../../componend/icon/Icon";
import {FlexWrapper} from "../../componend/FlexWrapper";
import {theme} from "../../styles/Theme";

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
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`
const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialLink = styled.a`
  background-color: rgba(225, 225, 225, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`

const SocialItem = styled.li`

`
