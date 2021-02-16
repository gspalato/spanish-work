import Pageable from 'pageable';
import React from 'react';
import styled from 'styled-components';

import { Tile } from '../Components/Tile';

// Styled components
var Container = styled.div`
    height: fit-to-content;
    width: inherit;

    z-index: 1;
`;

// Main component
interface ITileContainerProps {
    children: React.ReactElement<Tile>[]
}

export class TileContainer extends React.Component<ITileContainerProps>
{
    public Anchors: React.ReactElement<Tile>[] = [];

    public componentDidMount()
    {
        React.Children.forEach(this.props.children, child => {
            this.Anchors.push(child);
        });
    }

    public render()
    {
        return (
            <Container id="tile-container">
                {this.props.children}
            </Container>
        )
    };
}