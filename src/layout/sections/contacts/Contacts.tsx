import React from 'react';
import {SectionTitle} from "../../../componend/SectionTitle";
import {Button} from "../../../componend/Button";
import {Container} from "../../../componend/Container";
import { S } from './Contacts_Styles';

export const Contact: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"subject"}/>
                    <S.Field as={"textarea"} placeholder={"message"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};
