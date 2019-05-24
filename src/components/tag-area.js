import React from 'react';
import Tag from './tag';

class TagArea extends React.Component {

    render() {
        let arr = this.props.tags;
        let tags = arr.map( (tag) => <Tag type={tag} />);
        return (
            <div class="tag-area">
              {tags}
            </div>
        );
    }
}

export default TagArea;
