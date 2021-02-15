import React from 'react';
import styled from 'styled-components';

/* Styled components */
interface ParagraphProps {
    Black?: boolean,

    Color?: string,
    Gradient?: string,
    Size?: string,
    Font?: string,
};

var StyledParagraph = styled.p<ParagraphProps>`
    color: ${props => props.Black ? "#000000" : (props.Color || "#ffffff")} !important;
    font-family: ${props => props.Font || "var(--title-font)"};
    font-size: ${props => props.Size || "revert"};
`;

export class Paragraph extends React.Component<ParagraphProps>
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