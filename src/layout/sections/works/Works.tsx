import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componend/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../componend/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png"
import timerImg from "./../../../assets/images/proj-2.png"
import {Container} from "../../../componend/Container";

const worksItems = ["All", "landing page", "React", "spa"]


export const Works = () => {

    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Work title={"Social Network"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi cumque dicta distinctio dolorem doloribus eius id ipsum iure maiores minus odio perspiciatis possimus, quasi quisquam quo sed, soluta ullam?"}
                          src={socialImg}/>
                    <Work title={"Timer"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi cumque dicta distinctio dolorem doloribus eius id ipsum iure maiores minus odio perspiciatis possimus, quasi quisquam quo sed, soluta ullam?"}
                          src={timerImg}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  
`