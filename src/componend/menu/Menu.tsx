import React from 'react';
import styled from "styled-components";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <div>
            <StyledMenu>
                <ul>
                    {props.menuItems.map((items: string, index: number ) => {
                        return <li key={index}><a href="">{items}</a></li>
                    })}
                </ul>
            </StyledMenu>
        </div>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`