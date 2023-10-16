import React from 'react';
import {SectionTitle} from "../../../componend/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../componend/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png"
import timerImg from "./../../../assets/images/proj-2.png"
import {Container} from "../../../componend/Container";
import { S } from './Works_Styles';

const worksItems = ["All", "landing page", "React", "spa"]


const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi cumque dicta distinctio dolorem doloribus eius id ipsum iure maiores minus odio perspiciatis possimus, quasi quisquam quo sed, soluta ullam?"
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi cumque dicta distinctio dolorem doloribus eius id ipsum iure maiores minus odio perspiciatis possimus, quasi quisquam quo sed, soluta ullam?"
    },

]

export const Works: React.FC = () => {

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w)=>{
                        return <Work title={w.title}
                                     text={w.text}
                                     src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
