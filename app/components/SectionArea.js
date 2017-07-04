import React, { Component } from 'react';
import SectionItem from './SectionItem';
import { uniqueId } from 'lodash';
import styles from '../css/SectionArea.css';

export default class SectionArea extends Component {
    render() {
        let body = <h2>Select a section to begin.</h2>;
        console.log("this.props.item: ", this.props.items);
        console.log("this.props.activeItem: ", this.props.activeItem);

        if (this.props.items) {

            const sectionItems = this.props.items.map(function (item, index) {
                return <li key={_.uniqueId(`${this.props.sectionName}_${item}`)}>
                    <SectionItem
                        sectionName={this.props.sectionName}
                        name={item}
                        price={this.props.itemPrices[item]} 
                        onClick={() => this.props.itemClicked(this.props.sectionName, item)} />
                </li>
            }, this);
            body = <ul>{sectionItems}</ul>;
        } else if (this.props.sectionName) {
            body = <h2>Section has no Items. Please add some</h2>;
        }

        return (
            <div className={styles.sectionArea}>
                <h1>Hello Area!</h1>
                {body}
            </div>
        );
    }

}