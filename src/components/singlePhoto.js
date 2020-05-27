import React, { Component } from 'react';
import Photo from './photo';
import Comment from './comment';

export class SinglePhoto extends Component {
    render() {
        const id = Number(this.props.match.params.id);
        const selectedPost = this.props.posts.find((post)=> post.id === id);
        const comments = this.props.comments[id] || [];
        const index = this.props.posts.findIndex((post) => post.id === id);
        return (
            <div className="single-photo">
               <Photo post={selectedPost} {...this.props} index={index}/>
               <Comment addComm={this.props.addComment} comments={comments} postId={id}/>
            </div>
        )
    }
}

export default SinglePhoto