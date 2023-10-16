import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../componend/Link";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <div>
            <StyledTabMenu>
                <ul>
                    {props.menuItems.map((items: string, index: number) => {
                        return <ListItem key={index}>
                            <Link href="">{items}</Link>
                        </ListItem>
                    })}
                </ul>
            </StyledTabMenu>
        </div>
    );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    //gap: 20px;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`
  
`

