import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import styles from '../css/SectionList.css';
import SectionTab from './SectionTab';

export default class SectionList extends Component {

    // render() {
    //     let sectionItemMapping = {};
    //     const sectionTabs = this.props.sections.map(function(section, index){
    //         sectionItemMapping[section["tab_name"]] = section["tab_content"];
    //         return <li><SectionTab 
    //                     key={`${section["tab_name"]}_${index}`} 
    //                     name={section["tab_name"]}
    //                     className={styles.sectionTab}/></li>;
    //     });

    //     console.log("sectionItemMapping: " + sectionItemMapping["material"]);

    //     return (
    //         <div className={styles.sectionListBar}>
    //             <ul>{sectionTabs}</ul>
    //         </div>
    // );
    // }

    render() {
        // let that = this;
        const sectionTabs = this.props.sections.map(function (section, index) {
            // console.log("KEY: " +  _.uniqueId(`section_list_${section}_`) );
            // console.log("this: " + this);
            // console.log("that: " + that);

            return <li 
                    key={_.uniqueId(`section_list_${section}_`)}>
                <SectionTab
                name={section}
                className={styles.sectionTab}
                onClick={() => this.props.activeTab(section)} /></li>;
        }, this);

        return (
            <div className={styles.sectionListBar}>
                <ul>{sectionTabs}</ul>
            </div>
        );
    }



}