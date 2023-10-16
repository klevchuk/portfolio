import React from 'react';
import {FlexWrapper} from "../../../componend/FlexWrapper";
import {SectionTitle} from "../../../componend/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../componend/Container";
import { S } from './Skills_Styles';


const skillData = [
    {
        iconId: "codeSvg",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."
    },
    {
        iconId: "css3",
        title: "css3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."
    },
    {
        iconId: "react",
        title: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."
    },
    {
        iconId: "typescript",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."
    },
    {
        iconId: "styled",
        title: "styled components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."
    },
    {
        iconId: "design",
        title: "web design",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolorum eius impedit iste modi officia, recusandae veniam veritatis! Ad assumenda autem culpa fuga obcaecati odit placeat porro sunt, voluptates."
    },

]

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}/>

                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
