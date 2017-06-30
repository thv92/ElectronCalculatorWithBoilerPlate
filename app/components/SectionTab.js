import React, {Component} from 'react';

export default class SectionTab extends Component {
    render() {
        return (
            <div onClick={()=> this.props.onClick()}>{this.props.name}</div>
        );

    }

}