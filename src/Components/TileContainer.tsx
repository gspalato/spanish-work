import Pageable from 'pageable';
import React from 'react';
import styled from 'styled-components';

import { Tile } from '../Components/Tile';

// Styled components
var Container = styled.div`
    height: 100vh;
    width: inherit;
`;

// Main component
type TileContainerProps = {
    children: React.ReactElement<Tile>[]
}

export class TileContainer extends React.Component<TileContainerProps>
{
    public Anchors: React.ReactElement<Tile>[] = [];

    public componentDidMount()
    {
        React.Children.forEach(this.props.children, child => {
            this.Anchors.push(child);
        });

        /*
        (window as any).Pageable = new Pageable("#tile-container", {
            pips: true,

            onScroll: function(data: PageableData)
            {
                
            }
        });
        */
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