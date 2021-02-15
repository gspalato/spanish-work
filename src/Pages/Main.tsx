import AOS from 'aos';
import Pageable from 'pageable';
import React from 'react';
import styled from 'styled-components';

import { ScrollAnimate } from '../Components/ScrollAnimate';
import { Tile } from "../Components/Tile";
import { TileContainer } from "../Components/TileContainer";

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
    animation-timing-function: ease-in-out;
`;

var BouncingScrollArrow = styled.img`
    display: block;
    position: absolute;
    height: 5vh;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 95vh;

    -webkit-animation: gs-bounce 3s infinite;
    -moz-animation: gs-bounce 3s infinite;
    animation: gs-bounce 3s infinite;
`;

var IntroductionTitleContainer = styled.div`

`;

var IntroductionFirstTitle = styled.h1`
    display: block;
    position: absolute;

    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 14em;
    color: rgba(255,255,255,.075);

    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(119,119,119,1) 50%, rgba(17,17,17,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin: 22vh 0 0 40vh;
`;
var IntroductionSecondTitle = styled.h1`
    display: block;
    position: absolute;

    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 12em;
    color: #eeeeee;

    margin-top: 38vh;
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
                    <ProfileImage src="img/gslogo.svg"/>
                    <IntroductionFirstTitle>los</IntroductionFirstTitle>
                    <IntroductionSecondTitle className="gs-abs-hcenter">comparativos</IntroductionSecondTitle>
                    <BouncingScrollArrow
                    src="img/thin_arrow_white.png"
                    className="gs-abs-hcenter"></BouncingScrollArrow>
                </Tile>
                <Tile Name="Introducción" Background="#ffffff">
                    <ScrollAnimate Animation="fade-up">
                        <h1>fade-up animation</h1>
                    </ScrollAnimate>
                </Tile>
            </TileContainer>
        )
    };
}