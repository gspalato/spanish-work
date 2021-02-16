import React from 'react';
import styled from 'styled-components';

/* Styled components */
interface IStyledFlexProps {
    AlignItems: string,
    FlexDirection: string,
    Grow: string,
    Height: string,
    JustifyContent: string,
    Margin: string,
    Padding: string,
    TextAlign: string,
    Width: string,
};

var StyledFlex = styled.div<IStyledFlexProps>`
    display: flex;

    height: ${props => props.Height};
    width: ${props => props.Width};

    align-items: ${props => props.AlignItems};
    flex-direction: ${props => props.FlexDirection};
    flex-grow: ${props => props.Grow};
    justify-content: ${props => props.JustifyContent};
    text-align: ${props => props.TextAlign};

    margin: ${props => props.Margin};
    padding: ${props => props.Padding};
`;

/* Main component */
interface IFlexProps {
    AlignItems?: string,
    FlexDirection?: string,
    Grow?: boolean,
    Height?: string,
    JustifyContent?: string,
    Margin?: string,
    Padding?: string,
    TextAlign?: string,
    Width?: string,
}

export class Flex extends React.Component<IFlexProps>
{
    public render()
    {
        return (
            <StyledFlex
            AlignItems={this.props.AlignItems ?? ""}
            FlexDirection={this.props.FlexDirection ?? ""}
            Grow={(this.props.Grow || false) ? "1" : "0"}
            Height={this.props.Height ?? ""}
            JustifyContent={this.props.JustifyContent ?? ""}
            Margin={this.props.Margin ?? ""}
            Padding={this.props.Padding ?? ""}
            TextAlign={this.props.TextAlign ?? "none"}
            Width={this.props.Width ?? ""}>
                {this.props.children}
            </StyledFlex>
        )
    };
}