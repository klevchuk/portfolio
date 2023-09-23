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
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`

const ListItem = styled.li`
  
`

