import React, { Component } from 'react';


export default class SectionItem extends Component {
    render() {
        return (
            <div>
                <div>{`Item: ${this.props.name} `}</div>
                <div>{`Price: ${this.props.price}`}</div>
            </div>
        );
    }
}