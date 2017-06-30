import React, { Component } from 'react';
import SectionItem from './SectionItem';
import { uniqueId } from 'lodash';
import styles from '../css/SectionArea.css';

export default class SectionArea extends Component {
    render() {
        let body = <h2>Select a section to begin.</h2>;
        console.log("this.props.item: ", this.props.items);
        if (this.props.items) {
            const sectionItems = this.props.items.map(function (item, index) {
                return <li key={_.uniqueId(`${this.props.sectionName}_${item["name"]}`)}>
                    <SectionItem
                        sectionName={this.props.sectionName}
                        name={item["name"]}
                        price={item["price"]} />
                </li>
            }, this);
            body = <ul>{sectionItems}</ul>;
        }

        return (
            <div className={styles.sectionArea}>
                <h1>Hello Area!</h1>
                {body}
            </div>
        );
    }

}