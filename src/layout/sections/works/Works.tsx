import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componend/SectionTitle";
import {Menu} from "../../../componend/menu/Menu";
import {FlexWrapper} from "../../../componend/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png"
import timerImg from "./../../../assets/images/proj-2.png"

const worksItems = ["All", "landing page", "React", "spa"]


export const Works = () => {

    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
            <Work title={"Social Network"}
            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi cumque dicta distinctio dolorem doloribus eius id ipsum iure maiores minus odio perspiciatis possimus, quasi quisquam quo sed, soluta ullam?"}
            src={socialImg}/>
            <Work title={"Timer"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi cumque dicta distinctio dolorem doloribus eius id ipsum iure maiores minus odio perspiciatis possimus, quasi quisquam quo sed, soluta ullam?"}
            src={timerImg}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
  background-color: #deefff;
`