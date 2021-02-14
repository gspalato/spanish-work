import React from 'react';

type AnimateProps = {
    Animation: string,
    AnimationAnchor?: string,
    AnimationDuration?: string,
    AnimationEase?: string,
}

export class Animate extends React.Component<AnimateProps>
{
    public render()
    {
        return React.Children.map(this.props.children, (child) => {
             return React.cloneElement(child as any, {
                "data-aos": this.props.Animation,
                "data-aos-anchor-placement": this.props.AnimationAnchor,
                "data-aos-duration": this.props.AnimationDuration,
                "data-aos-easing": this.props.AnimationEase,
            });
        });
    };
}