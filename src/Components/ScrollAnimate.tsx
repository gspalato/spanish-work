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

export class ScrollAnimate extends React.Component<AnimateProps>
{
    public render()
    {
        return React.Children.map(this.props.children, (child) => {
             return React.cloneElement(child as any, {
                "data-aos": this.props.Animation,
                "data-aos-anchor-placement": this.props.Anchor       || "",
                "data-aos-delay": this.props.Delay?.toString()       || "0",
                "data-aos-duration": this.props.Duration?.toString() || "750",
                "data-aos-easing": this.props.Ease                   || "ease-in-out",
                "data-aos-mirror": this.props.Mirror?.toString()     || "false",
                "data-aos-offset": this.props.Offset?.toString()     || "0",
                "data-aos-once": this.props.Once?.toString()         || "false",
            });
        });
    };
}