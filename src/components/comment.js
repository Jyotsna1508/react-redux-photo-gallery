import React, { Component } from 'react';

export class Comment extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addComm(event.target.elements.comment.value, this.props.postId)
        event.target.elements.comment.value = '';
    }
    render() {
        return (
            <div className="comment" >
                {
                    this.props.comments.map((comment, i) => {
                        return(
                            <p key={i}>{comment}</p>
                        )
                    })
                }
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Feel free to add comments" name="comment"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Comment