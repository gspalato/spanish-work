import React from 'react';

export class ScrollReveal extends React.Component {
    render() {
        return React.Children.map(this.props.children, child => {
            var className = `gs-scrollreveal ${(child as any).props.className}`;
            console.log(className);
            return React.cloneElement(child as any, {
                className
            });
        });
    }
}