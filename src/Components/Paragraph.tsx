import React from 'react';
import styled from 'styled-components';

/* Styled components */
interface IParagraphProps {
    Black?: boolean,
    Color?: string,
    Font?: string,
    Gradient?: string,
    Size?: string,
    Spacing?: string,
    Weight?: string,
};

var StyledParagraph = styled.p<IParagraphProps>`
    color: ${props => props.Black ? "#000000" : (props.Color || "#ffffff")} !important;
    font-family: ${props => props.Font || "var(--text-font)"};
    font-size: ${props => props.Size || "7vh"};
    font-weight: ${props => props.Weight || ""};
    letter-spacing: ${props => props.Spacing || ".2px"};
    overflow-wrap: normal;

    background: ${props => !!props?.Gradient?.length && props.Gradient};
	-webkit-background-clip: ${props => !!props?.Gradient?.length && "text"};
	-webkit-text-fill-color: ${props => !!props?.Gradient?.length && "transparent"};
`;

export class Paragraph extends React.Component<IParagraphProps>
{
    public render()
    {
        return (
            <StyledParagraph
            Black={this.props.Black ?? false}
            Color={this.props.Color ?? ""}
            Font={this.props.Font ?? ""}
            Gradient={this.props.Gradient ?? ""}
            Size={this.props.Size ?? ""}
            Spacing={this.props.Spacing}
            Weight={this.props.Weight ?? ""}>
                {this.props.children}
            </StyledParagraph>
        );
    };
}