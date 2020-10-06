import React from 'react';
import Aux from '../../hoc/aux/Aux'

const layout = (props) => (
    <Aux>
        <div>Sidebar, toolbar, backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout;