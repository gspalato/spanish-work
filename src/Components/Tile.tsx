import React from 'react';
import styled from 'styled-components';

/* Styled components */
interface IStyledTileProps {
    AlignItems: string,
    BackgroundColor: string,
    Display: string,
    FlexDirection: string,
    Height: string,
    JustifyContent: string,
    OverflowX: string,
    OverflowY: string,
    TextAlign: string,
};

var StyledTile = styled.div<IStyledTileProps>`
    display: ${props => props.Display};

    height: ${props => props.Height};
    width: inherit;
    background-color: ${props => props.BackgroundColor};

    align-items: ${props => props.AlignItems};
    flex-direction: ${props => props.FlexDirection};
    justify-content: ${props => props.JustifyContent};
    text-align: ${props => props.TextAlign};

    overflow-x: ${props => props.OverflowX};
    overflow-y: ${props => props.OverflowY};
`;

/* Main component */
interface ITileProps {
    AlignItems?: string,
    Alternate?: boolean,
    Background?: string,
    Flex?: boolean,
    FlexDirection?: string,
    HideOverflowX?: boolean,
    HideOverflowY?: boolean,
    JustifyContent?: string,
    Landing?: boolean,
    Name: string,
    TextAlign?: string,
}

export class Tile extends React.Component<ITileProps>
{
    public Name: string;

    constructor(props: ITileProps)
    {
        super(props);
        this.Name = this.props.Name;
    }

    public render()
    {
        return (
            <StyledTile className="gs-tile" data-anchor={this.props.Name} id={this.props.Name.toLowerCase()}
            AlignItems={this.props.AlignItems || ""}
            BackgroundColor={this.props.Alternate ? "#090909" : (this.props.Background || "transparent")}
            Display={this.props.Flex ? "flex" : ""}
            FlexDirection={this.props.FlexDirection || ""}
            Height={this.props.Landing ? "100vh" : "95vh"}
            JustifyContent={this.props.JustifyContent || ""}
            OverflowX={this.props.HideOverflowX ? "hidden" : "unset"}
            OverflowY={this.props.HideOverflowY ? "hidden" : "unset"}
            TextAlign={this.props.TextAlign ?? "none"}>
                {this.props.children}
            </StyledTile>
        )
    };
}