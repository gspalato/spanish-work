import React from 'react';
import styled from 'styled-components';

/* Styled components */
interface ITitleProps {
    Black?: boolean,

    Color?: string,
    className?: string,
    Font?: string,
    Gradient?: string,
    Size?: string,

    Style?: string,
};

var StyledTitle = styled.h1<ITitleProps>`
    color: ${props => props.Black ? "#000000" : (props.Color || "#ffffff")} !important;
    font-family: ${props => props.Font || "var(--title-font)"};
    font-size: ${props => props.Size};
    ${props => props.Style || ""}
`;

export class Title extends React.Component<ITitleProps>
{
    public render()
    {
        return (
            <StyledTitle
            className={this.props.className}
            Black={this.props.Black}
            Color={this.props.Color}
            Font={this.props.Font}
            Size={this.props.Size}
            Style={this.props.Style}>
                {this.props.children}
            </StyledTitle>
        );
    };
}