import React from 'react';
import styled from 'styled-components';

/* Styled components */
interface StyledTileProps {
    Height: string,
    BackgroundColor: string,
    OverflowX: string,
    OverflowY: string,
};

var StyledTile = styled.div<StyledTileProps>`
    height: ${props => props.Height};
    width: inherit;
    background-color: ${props => props.BackgroundColor};

    overflow-x: ${props => props.OverflowX};
    overflow-y: ${props => props.OverflowY};
`;

/* Main component */
type TileProps = {
    Alternate?: boolean,
    Name: string,
    Landing?: boolean,
    Background?: string,
    HideOverflowX?: boolean,
    HideOverflowY?: boolean,
}

export class Tile extends React.Component<TileProps>
{
    public Name: string;

    constructor(props: TileProps)
    {
        super(props);
        this.Name = this.props.Name;
    }

    public render()
    {
        return (
            <StyledTile className="gs-tile" data-anchor={this.props.Name} id={this.props.Name.toLowerCase()}
            BackgroundColor={this.props.Alternate ? "#111111" : (this.props.Background || "transparent")}
            Height={this.props.Landing ? "100vh" : "95vh"}
            OverflowX={this.props.HideOverflowX ? "hidden" : "unset"}
            OverflowY={this.props.HideOverflowY ? "hidden" : "unset"}>
                {this.props.children}
            </StyledTile>
        )
    };
}