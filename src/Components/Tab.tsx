import React from 'react';

interface ITabProps {
    Size?: number,
}

export class Tab extends React.Component<ITabProps> {
    render() {
        return [...Array(this.props.Size ?? 1)].map(() => (
            <React.Fragment>
                &nbsp;
            </React.Fragment>
        ));
    }
}