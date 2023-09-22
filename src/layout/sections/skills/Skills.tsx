import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../componend/FlexWrapper";
import {SectionTitle} from "../../../componend/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../componend/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"codeSvg"} title={"html5"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."}/>
                    <Skill iconId={"css3"} title={"css3"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."}/>
                    <Skill iconId={"react"} title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."}/>
                    <Skill iconId={"typescript"} title={"typescript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."}/>
                    <Skill iconId={"styled"} title={"styled components"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."}/>
                    <Skill iconId={"design"} title={"web design"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
  
`