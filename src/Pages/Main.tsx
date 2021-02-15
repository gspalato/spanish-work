import AOS from 'aos';
import React from 'react';
import styled from 'styled-components';
import TextLoop from "react-text-loop";

import { ScrollAnimate } from '../Components/ScrollAnimate';
import { Tile } from "../Components/Tile";
import { TileContainer } from "../Components/TileContainer";
import { Title } from "../Components/Title";

import 'aos/dist/aos.css'

// Styled components
var ProfileImage = styled.img`
    position: absolute;
    height: 6.5vh;
    width: auto;
    left: 40px;
    top: 40px;

    animation: gs-slide-right 1.5s;
    animation-delay: .5s;
`;

var BouncingScrollArrow = styled.img`
    display: block;
    position: absolute;
    height: 5vh;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 95vh;

    animation: gs-bounce 3s infinite;
`;

var IntroductionTitleContainer = styled.div`
    display: block;
    position: absolute;

    height: 75vh;
    width: 75vw;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

var FirstTitle = styled.h1`
    display: block;
    position: absolute;

    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 14em;
    color: #eeeeee;

    margin: 12vh 0 0 4vh;
`;
var SecondTitle = styled.h1`
    position: absolute;

    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 12em;
    
    background: linear-gradient(135deg, rgba(218,6,109,1) 0%, rgba(233,56,62,1) 50%, rgba(255,124,0,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-top: 30vh;
    margin-left: auto;
    margin-right: auto;
`;

// Main component
export class MainPage extends React.Component
{
    public componentDidMount()
    {
        AOS.init();
    }

    public render()
    {
        return (
            <TileContainer>
                <Tile Landing HideOverflowX Name="Título">
                    <ProfileImage src="img/gslogo.svg" />
                    <IntroductionTitleContainer>
                        <ScrollAnimate Animation="fade-down" Delay={500}>
                            <FirstTitle>los</FirstTitle>
                        </ScrollAnimate>
                        <SecondTitle className="gs-abs-hcenter gs-fadeIn">comparativos</SecondTitle>
                    </IntroductionTitleContainer>
                    <ScrollAnimate Animation="fade-up" Delay={750}>
                        <BouncingScrollArrow src="img/thin_arrow_white.png" className="gs-abs-hcenter" />
                    </ScrollAnimate>
                </Tile>
                <Tile Name="Introducción" Alternate>
                    <ScrollAnimate Animation="fade-up">
                        <Title>Introducción</Title>
                    </ScrollAnimate>
                </Tile>
                <Tile Name="Igualdad">
                    <ScrollAnimate Animation="fade-up">
                        <Title>Igualdad</Title>
                    </ScrollAnimate>
                </Tile>
                <Tile Name="Desigualdad" Alternate>
                    <ScrollAnimate Animation="fade-up">
                        <Title Size="">Desigualdad</Title>
                    </ScrollAnimate>
                </Tile>
            </TileContainer>
        )
    };
}