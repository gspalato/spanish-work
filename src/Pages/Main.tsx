import React from 'react';
import Pageable from 'pageable';

import { Tile } from "../Components/Tile";

type PageProps = {
    
}

export class MainPage extends React.Component
{
    constructor(props: PageProps)
    {
        super(props);
    }

    public componentDidMount()
    {
        new Pageable("#container", {
            pips: true,

            onInit: function(data: PageableData)
            {
                
            }
        });
    }

    public render()
    {
        return (
            <div id="container">
                <Tile Name="Título">

                </Tile>
                <Tile Name="Introducción">
                    
                </Tile>
            </div>
        )
    };
}