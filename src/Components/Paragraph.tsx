import React from 'react';
import styled from 'styled-components';

/* Styled components */
interface IParagraphProps {
    Black?: boolean,

    Color?: string,
    Gradient?: string,
    Size?: string,
    Font?: string,
};

var StyledParagraph = styled.p<IParagraphProps>`
    color: ${props => props.Black ? "#000000" : (props.Color || "#ffffff")} !important;
    font-family: ${props => props.Font || "var(--text-font)"};
    font-size: ${props => props.Size || "7vh"};
    letter-spacing: .2px;
`;

export class Paragraph extends React.Component<IParagraphProps>
{
    public render()
    {
        return (
            <StyledParagraph
            Black={this.props.Black}
            Color={this.props.Color}
            Size={this.props.Size}
            Font={this.props.Font}>
                {this.props.children}
            </StyledParagraph>
        );
    };
}