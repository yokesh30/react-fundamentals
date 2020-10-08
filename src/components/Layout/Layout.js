import React from 'react';
import Aux from '../../hoc/aux/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import styles from './Layout.module.css'
import SideDrawer from '../SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;