import AOS from 'aos';
import anime from 'animejs';
import React from 'react';
import styled from 'styled-components';
import SR from 'scrollreveal';

import { FaEquals, FaNotEqual } from 'react-icons/fa';

import { EqualsSymbol } from '../Components/EqualsSymbol';
import { NotEqualSymbol } from '../Components/NotEqualSymbol';
import { ScrollAnimate } from '../Components/ScrollAnimate';
import { ScrollReveal } from '../Components/ScrollReveal';
import { Tab } from '../Components/Tab';
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

var EqualsBar = styled.div`
	height: 20vw;
	width: 100%;

	background: transparent;
	border: 3px solid white;
`;

// Main component
export class MainPage extends React.Component
{
	public componentDidMount()
	{
		AOS.init();
		SR().reveal(".gs-scrollreveal", { reset: true });

		anime({
			targets: '.gs-expr-icon path',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 4500,
			delay: function(el, i) { return i * 250 },
			direction: 'alternate',
			loop: true
		});
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
						<Title Style="padding-top:7.5vh;">Introducción</Title>
						<FlexChild Grow Padding="0 0 15vh 0">
							<Flex Grow Height="100%" Width="100%" JustifyContent="center" AlignItems="center">
								<div style={{textAlign:"left"}}>
									<Paragraph Font="'Roboto Mono'" Size="2.1vh" Spacing=".3px">
										<Tab Size={4}/>La comparación es una idea aproximada del argumento, debido al énfasis<br></br>
										en uno o más aspectos y cualidades de algún elemento.
									</Paragraph>
									<Paragraph Font="'Roboto Mono'" Size="2.1vh" Spacing=".3px">
										<Tab Size={4}/>Expresado solo por el lenguaje, hace necesaria la existencia de reglas,<br></br>
										que son esenciales para otras organizaciones y composiciones más complejas del lenguaje<br></br>
										como las cláusulas subordinadas adverbiales comparativas. Entonces, aquí se explican de<br></br>
										forma concisa y sencilla. 
									</Paragraph>
								</div>
							</Flex>
						</FlexChild>
					</Tile>
					<Tile Name="Igualdad" Flex FlexDirection="column" AlignItems="left">
						<Flex Grow>
							<FlexChild Grow>
								<Flex Grow Height="100%" FlexDirection="column" AlignItems="center">
									<FlexChild Padding="7.5vh 0 0 0">
										<Title className="gs-equality-text-gradient">Igualdad</Title>
									</FlexChild>
									<FlexChild Grow Padding="0 0 15vh 0">
										<Flex Grow Height="100%" Width="100%" FlexDirection="column" JustifyContent="center" AlignItems="center" TextAlign="left">
											<div style={{textAlign:"left"}}>
												<Paragraph Font="'Roboto Mono'" Size="2.1vh" Spacing=".3px">
													<Tab Size={4}/>Los comparativos de igualdad expresan una correlación<br></br>
													entre dos personas o cosas, que tienen la mesma cantidad<br></br>
													de una calidad como la otra.
												</Paragraph>
												<Paragraph Font="'Roboto Mono'" Size="2.1vh" Spacing=".3px">
													<Tab Size={4}/>Para cualidads que son adjetivos o adverbios, se utiliza la<br></br>
													palabra "tan". De lo contrario, caso la calidad sea un sustantivo,<br></br>
													se usa "tanto". En todas las ocasiones, la comparación termina<br></br>
													en "como".
												</Paragraph>
											</div>
										</Flex>
										<FlexChild Style="position:relative;bottom:10vh;" Padding="4vh 0 4vh 0">
											<Flex Grow Height="100%" Width="100%" FlexDirection="column" JustifyContent="center" AlignItems="center" TextAlign="justify">
												<Paragraph Font="'Roboto Mono'" Size="2.25vh">
													"Todos ellos son <i>tan</i> ricos <i>como</i> ellas."
												</Paragraph>
												<Paragraph Font="'Roboto Mono'" Size="2.25vh">
													"Ellas se preguntan <i>tantos</i> porqués <i>como</i> nosotros"
												</Paragraph>
											</Flex>
										</FlexChild>
									</FlexChild>
								</Flex>
							</FlexChild>
							<FlexChild Grow>
								<Flex Grow Height="100%" JustifyContent="center" AlignItems="center">
									{/*<FaEquals className="gs-expr-icon"/>*/}
									<EqualsSymbol/>
								</Flex>
							</FlexChild>
						</Flex>
					</Tile>
					<Tile Name="Desigualdad" Alternate Flex FlexDirection="column" AlignItems="right">
						<Flex Grow>
							<FlexChild Grow>
								<Flex Grow Height="100%" JustifyContent="center" AlignItems="center">
									{/*<FaNotEqual className="gs-expr-icon"/>*/}
									<NotEqualSymbol />
								</Flex>
							</FlexChild>
							<FlexChild Grow>
								<Flex Grow Height="100%" FlexDirection="column" AlignItems="center">
									<FlexChild Padding="7.5vh 0 0 0">
										<Title className="gs-inequality-text-gradient">Desigualdad</Title>
									</FlexChild>
									<FlexChild Grow Padding="0 0 15vh 0">
										<Flex Grow Height="100%" Width="100%" FlexDirection="column" JustifyContent="center" AlignItems="center" TextAlign="left">
											<div style={{textAlign:"left"}}>
												<Paragraph Font="'Roboto Mono'" Size="2.1vh" Spacing=".3px">
													<Tab Size={4}/>Las comparaciones de desigualdad se dividen en comparaciones<br></br>
													de superioridad e inferioridad. En las comparaciones de superioridad<br></br>
													se utiliza la palabra "más" seguida de la cualidad, ya sea sustantivo,<br></br>
													adjetivo o adverbio y "que".
												</Paragraph>
												<Paragraph Font="'Roboto Mono'" Size="2.1vh" Spacing=".3px">
													<Tab Size={4}/>La inferioridad se escribe de la misma manera que las<br></br>
													comparaciones de superioridad, pero en su lugar utiliza la palabra<br></br>
													"menos". 
												</Paragraph>
												<Paragraph Font="'Roboto Mono'" Size="2.1vh" Spacing=".3px">
													<Tab Size={4}/>Sin embargo, hay calidades "irregulares" que requieren una<br></br>
													construcción diferente: mayor y mejor. Tales cualidades eliminan<br></br>
													"más" y "menos" y reemplazan directamente con "es" junto con la<br></br>
													calidad misma.
												</Paragraph>
												<Paragraph Font="'Roboto Mono'" Size="2.1vh" Spacing=".3px">
													<Tab Size={4}/><i>Mayor/manor</i> se refiere a la edad, mientras que<br></br>
													<i>más grande/más pequeño</i> se refiere al tamaño. 
												</Paragraph>
											</div>
										</Flex>
										<FlexChild Style="position:relative;bottom:10vh;" Padding="4vh 0 4vh 0">
											<Flex Grow Height="100%" Width="100%" FlexDirection="column" JustifyContent="center" AlignItems="center" TextAlign="justify">
												<Paragraph Font="'Roboto Mono'" Size="2.25vh">
													"Juan tiene <i>más</i> perros <i>que</i> yo. "
												</Paragraph>
												<Paragraph Font="'Roboto Mono'" Size="2.25vh">
													"Juan <i>es más pequeño que</i> yo."
												</Paragraph>
												<Paragraph Font="'Roboto Mono'" Size="2.25vh">
													"Yo soy <i>menos saudable que</i> usted."
												</Paragraph>
											</Flex>
										</FlexChild>
									</FlexChild>
								</Flex>
							</FlexChild>
						</Flex>
					</Tile>
				</TileContainer>
				<Footer>
					<Paragraph
					Gradient="linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)"
					Size="1.25em"
					Weight="bold">Hecho con ❤️ por Gabriel Spalato.</Paragraph>
				</Footer>
			</React.Fragment>
		)
	};
}