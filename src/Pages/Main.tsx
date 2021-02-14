import AOS from 'aos';
import Pageable from 'pageable';
import React from 'react';
import styled from 'styled-components';

import { Animate } from '../Components/Animate';
import { Tile } from "../Components/Tile";

import 'aos/dist/aos.css'

// Styled components
var Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

var StaticsContainer = styled.div`
    position: fixed;

    height: inherit;
    width: inherit;
`;

var TileContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

var ProfileImage = styled.img`
    position: fixed;

    border-radius: 50%;

    height: 6.5vh;
    width: auto;

    left: .75vw;
    top: 1vh;
`

// Main component
export class MainPage extends React.Component
{
    public componentDidMount()
    {
        AOS.init();

        /*new Pageable("#tiles", {
            pips: true,

            onInit: function(data: PageableData)
            {
                
            }
        });*/
    }

    public render()
    {
        return (
            <Container id="container">
                <StaticsContainer id="statics">
                    <ProfileImage src="img/pfp.png"/>
                </StaticsContainer>
                <TileContainer id="tiles">
                    <Tile Name="Título">
                        <h1>bien, nada.</h1>
                    </Tile>
                    <Tile Name="Introducción">
                        <Animate Animation="fade-up">
                            <h1>fade-up animation</h1>
                        </Animate>
                    </Tile>
                </TileContainer>
            </Container>
        )
    };
}