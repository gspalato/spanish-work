import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
    height: 100vh;
    width: 100vw;
`;

type TileProps = {
    Name: string,
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
            <StyledTile className="gs-tile" data-anchor={this.props.Name}>
                {this.props.children}
            </StyledTile>
        )
    };
}