import React from 'react';

interface IEqualsSymbolProps {
    Size?: number,
}

export class EqualsSymbol extends React.Component<IEqualsSymbolProps> {
    render() {
        return (
            <svg stroke="url(#g1)" className="gs-expr-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                <defs>
                    <linearGradient id='g1' y2='1'>
                        <stop stop-color='#00c9ff'/>
                        <stop offset='1' stop-color='#92fe9d'/>
                    </linearGradient>
                </defs>    
                <path d="M416 304H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32zm0-192H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
        );
    }
}