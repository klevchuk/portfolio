import React from 'react';
import {Icon} from "../../componend/icon/Icon";
import {FlexWrapper} from "../../componend/FlexWrapper";
import { S } from './Footer_Styles';

const socialItemsData = [
    {
        iconId: "insta"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "vk"
    },
    {
        iconId: "linkedin"
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Vlad</S.Name>
                <S.SocialList>

                    {socialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon iconId={s.iconId} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Vlad Klevchuk, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};
