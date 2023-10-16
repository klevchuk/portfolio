import React from 'react';
import {S} from '../HeaderMenu_Styles'

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
            <ul>
                {props.menuItems.map((items: string, index: number) => {
                    return <S.MenuItem key={index}>
                        <S.Link href="">
                            {items}
                            <S.Mask>
                                <span>{items}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{items}</span>
                            </S.Mask>
                        </S.Link>
                    </S.MenuItem>
                })}
            </ul>
    );
};

