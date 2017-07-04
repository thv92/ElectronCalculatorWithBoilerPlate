import React, { Component } from 'react';


export default class SectionItem extends Component {
    render() {
        return (
            <div onClick={()=> this.props.onClick()}>
                {`Item: ${this.props.name} Price: ${this.props.price}`}
            </div>
        );
    }
}