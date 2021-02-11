import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
    height: 100vh;
    width: 100vw;
`;

type TileProps = {
    Anchor: string,
}

export class Tile extends React.Component<TileProps>
{
    constructor(props: TileProps)
    {
        super(props);
    }

    public render()
    {
        return (
            <StyledTile data-anchor={this.props.Anchor} className="gs-tile">
                {this.props.children}
            </StyledTile>
        )
    };
}