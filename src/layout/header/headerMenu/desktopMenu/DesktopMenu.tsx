import React from 'react';
import { S } from '../HeaderMenu_Styles';
import {Menu} from "../menu/Menu";


export const DesktopMenu: React.FC<{menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
    return (
        <div>
            <S.DesktopMenu>
                <Menu menuItems={props.menuItems}/>
            </S.DesktopMenu>
        </div>
    );
};


