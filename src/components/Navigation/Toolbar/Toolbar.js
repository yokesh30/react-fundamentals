import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = () => (
    <header className={styles.Toolbar}>
        <div>Menu</div>
        <div className={styles.Logo}>
            <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar

