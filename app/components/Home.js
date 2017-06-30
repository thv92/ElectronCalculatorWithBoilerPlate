// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import SectionListContainer from '../containers/SectionListContainer';
import SectionAreaContainer from '../containers/SectionAreaContainer';

export default class Home extends Component {
  render() {
    return (
      // <div>
      //   <div className={styles.container} data-tid="container">
      //     <h2>Home</h2>
      //     <SectionListContainer />
      //     <Link to="/counter">to Counter</Link>
      //   </div>
      // </div>
      <div>
        <SectionListContainer />
        <SectionAreaContainer />
      </div>
    );
  }
}
