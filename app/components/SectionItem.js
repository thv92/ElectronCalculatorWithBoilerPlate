import React, { Component } from 'react';


export default class SectionItem extends Component {
    render() {
        return (
            <div>
                <h1>{`Item: ${this.props.name} Price: ${this.props.price}`}</h1>
            </div>
        );
    }
}