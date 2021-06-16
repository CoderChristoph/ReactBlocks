import React, { Component } from 'react';
import styles from './css/Header.module.css';

class Header extends Component {

    render() {
        return (
            <div className={ styles.primaryDivBox }>This is the header!</div>
        );    
    }
}



export default Header;