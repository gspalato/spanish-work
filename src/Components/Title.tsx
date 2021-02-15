import React from 'react';
import styled from 'styled-components';

/* Styled components */
interface TitleProps {
    Black?: boolean,

    Color?: string,
    Gradient?: string,
    Size?: string,
    Font?: string,
};

var StyledTitle = styled.h1<TitleProps>`
    color: ${props => props.Black ? "#000000" : (props.Color || "#ffffff")} !important;
    font-family: ${props => props.Font || "var(--title-font)"};
    font-size: ${props => props.Size};
`;

export class Title extends React.Component<TitleProps>
{
    public render()
    {
        return (
            <StyledTitle
            Black={this.props.Black}
            Color={this.props.Color}
            Size={this.props.Size}
            Font={this.props.Font}>
                {this.props.children}
            </StyledTitle>
        );
    };
}