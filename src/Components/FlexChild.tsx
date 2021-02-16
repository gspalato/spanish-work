import React from 'react';
import styled from 'styled-components';

/* Styled components */
interface IStyledFlexChildProps {
    AlignSelf: string,
    FlexDirection: string,
    Grow: string,
    JustifyContent: string,
    Margin: string,
    Padding: string,
    TextAlign: string,
};

var StyledFlexChild = styled.div<IStyledFlexChildProps>`
    height: fit-to-content;
    width: fit-to-content;

    align-self: ${props => props.AlignSelf};
    flex-direction: ${props => props.FlexDirection};
    flex-grow: ${props => props.Grow};
    justify-content: ${props => props.JustifyContent};
    text-align: ${props => props.TextAlign};

    margin: ${props => props.Margin};
    padding: ${props => props.Padding};
`;

/* Main component */
interface IFlexChildProps {
    AlignSelf?: string,
    FlexDirection?: string,
    Grow?: boolean,
    JustifyContent?: string,
    Margin?: string,
    Padding?: string,
    TextAlign?: string,
}

export class FlexChild extends React.Component<IFlexChildProps>
{
    public render()
    {
        return (
            <StyledFlexChild
            AlignSelf={this.props.AlignSelf ?? ""}
            FlexDirection={this.props.FlexDirection ?? ""}
            Grow={(this.props.Grow || false) ? "1" : "0"}
            JustifyContent={this.props.JustifyContent ?? ""}
            Margin={this.props.Margin ?? ""}
            Padding={this.props.Padding ?? ""}
            TextAlign={this.props.TextAlign ?? "none"}>
                {this.props.children}
            </StyledFlexChild>
        )
    };
}