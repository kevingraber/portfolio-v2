import React from 'react';

class Tag extends React.Component {
    getIcon(tagName) {
        switch(tagName) {
            case 'python':
                return 'fab fa-python';
            case 'node':
                return 'fab fa-node-js';
            case 'database':
                return 'fas fa-database';
            case 'npm':
                return  'fab fa-npm';
            default:
                return '';
        }
    }

    render() {
        return (
            <div class="tag">
                <i class={this.getIcon(this.props.type)}></i>
            </div>
        );
    }
}

export default Tag;
