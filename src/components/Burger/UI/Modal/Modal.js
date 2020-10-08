import React, {Component} from 'react';
import styles from './Modal.module.css'
import Aux from '../../../../hoc/aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} closed={this.props.closed}/>
                <div className={styles.Modal}
                     style={{
                         textTransform: this.props.show ? 'translateY(0)' : 'translateY(-100)',
                         opacity: this.props.show ? 1 : 0
                     }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show ||
            nextProps.children !== this.props.children
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('true')
    }
}

export default Modal
