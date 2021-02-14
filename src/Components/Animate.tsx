import React from 'react';

type AnimateProps = {
    Animation: string,
    Anchor?: string,
    Delay?: number,
    Duration?: number,
    Ease?: string,
    Mirror?: boolean,
    Offset?: number,
    Once?: boolean,
}

export class Animate extends React.Component<AnimateProps>
{
    public render()
    {
        return React.Children.map(this.props.children, (child) => {
             return React.cloneElement(child as any, {
                "data-aos": this.props.Animation,
                "data-aos-anchor-placement": this.props.Anchor,
                "data-aos-delay": this.props.Delay?.toString(),
                "data-aos-duration": this.props.Duration?.toString(),
                "data-aos-easing": this.props.Ease,
                "data-aos-mirror": this.props.Mirror?.toString(),
                "data-aos-offset": this.props.Offset?.toString(),
                "data-aos-once": this.props.Once?.toString(),
            });
        });
    };
}