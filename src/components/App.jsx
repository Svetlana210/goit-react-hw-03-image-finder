import { Component } from 'react';

// import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import styles from './app.module.css';

export class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
