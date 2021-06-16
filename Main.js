import React, { Component } from 'react';
import styles from './css/Main.module.css';

class Main extends Component {

    render() {
        return (
            <div className={styles.MainPrimaryDiv}>
                {this.props.children}
            </div>
        );    
    }


}



export default Main;