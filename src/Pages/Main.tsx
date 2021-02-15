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

    animation: gs-slide-right .75s;
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
                    <ScrollAnimate Animation="slide-right" Offset={-200}>
                        <ProfileImage src="img/gslogo.svg"/>
                    </ScrollAnimate>
                    <BouncingScrollArrow
                    src="img/thin_arrow_white.png"
                    className="gs-center-horizontal-absolute"></BouncingScrollArrow>
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