import React, { Component } from 'react';
import './ProgressBar.scss'

class ProgressBar extends Component {

    render() {
        const { page } = this.props;
        return (
            <div>
                <ul className="progressbar">
                    <li className={page === 1 ? 'active' : ''}></li>
                    <li className={page === 2 ? 'active' : ''}></li>
                    <li className={page === 3 ? 'active' : ''}></li>
                </ul>
            </div>
        );
    }

}

export default ProgressBar;