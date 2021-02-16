import AOS from 'aos';
import React from 'react';
import styled from 'styled-components';

import { ScrollAnimate } from '../Components/ScrollAnimate';
import { Tile } from "../Components/Tile";
import { TileContainer } from "../Components/TileContainer";
import { Title } from "../Components/Title";

import 'aos/dist/aos.css'
import { Flex } from '../Components/Flex';
import { FlexChild } from '../Components/FlexChild';
import { Paragraph } from '../Components/Paragraph';

// Styled components
var ProfileImage = styled.img`
	position: absolute;
	height: 6.5vh;
	width: auto;
	left: 40px;
	top: 40px;

	animation: gs-slide-right 1.5s;
`;

var BouncingScrollArrow = styled.img`
	display: block;
	position: absolute;
	height: 4.75vh;
	width: auto;
	margin-left: auto;
	margin-right: auto;
	margin-top: 92.5vh;

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

var Footer = styled.footer`
	display: grid;
  	place-items: center;

	height: 10vh;
	left: 0;
	bottom: 0;
`;

var SpotifyLogo = styled.img`
	display: inline-block;
	height: 3vh;
	width: 3vh;
`

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
			<React.Fragment>
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
					<Tile Name="Introducción" Alternate Flex FlexDirection="column" AlignItems="center">
						<ScrollAnimate Animation="fade-in">
							<Title Style="padding-top:5vh;">Introducción</Title>
						</ScrollAnimate>
						<FlexChild Grow Padding="0 0 5vh 0">
							<Flex Grow Height="100%" Width="100%" JustifyContent="center" AlignItems="center">
								<Paragraph Size="2vh">Lorem ipsum alexandrem isim...</Paragraph>
							</Flex>
						</FlexChild>
					</Tile>
					<Tile Name="Igualdad" Flex FlexDirection="column" AlignItems="left">
						<Flex Grow>
							<FlexChild Grow>
								<Flex Grow Height="100%" FlexDirection="column" AlignItems="center">
									<FlexChild Padding="5vh 0 0 0">
										<Title>Igualdad</Title>
									</FlexChild>
									<FlexChild Grow Padding="0 0 10vh 0">
										<Flex Grow Height="100%" FlexDirection="column" JustifyContent="center">
											<Paragraph Size="2vh">Lorem ipsum alexandrem isim...</Paragraph>
										</Flex>
									</FlexChild>
								</Flex>
							</FlexChild>
							<FlexChild Grow>
								<Flex Grow Height="100%" JustifyContent="center" AlignItems="center">
									{/* Insert something here */}
								</Flex>
							</FlexChild>
						</Flex>
					</Tile>
					<Tile Name="Desigualdad" Alternate Flex FlexDirection="column" AlignItems="right">
					<Flex Grow>
							<FlexChild Grow>
								<Flex Grow Height="100%" JustifyContent="center" AlignItems="center">
									{/* Insert something here */}
								</Flex>
							</FlexChild>
							<FlexChild Grow>
								<Flex Grow Height="100%" FlexDirection="column" AlignItems="center">
									<FlexChild Padding="5vh 0 0 0">
										<Title>Desigualdad</Title>
									</FlexChild>
									<FlexChild Grow Padding="0 0 10vh 0">
										<Flex Grow Height="100%" FlexDirection="column" JustifyContent="center">
											<Paragraph Size="2vh">Lorem ipsum alexandrem isim...</Paragraph>
										</Flex>
									</FlexChild>
								</Flex>
							</FlexChild>
						</Flex>
					</Tile>
				</TileContainer>
				<Footer>
					<Paragraph Size="2vh">Hecho con ❤️ por Gabriel Spalato</Paragraph>
				</Footer>
			</React.Fragment>
		)
	};
}