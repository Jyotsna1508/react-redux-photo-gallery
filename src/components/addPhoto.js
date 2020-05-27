import React, { Component } from 'react';

export class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (imageLink && description) {
            console.log(this.props);
           this.props.addPost(post)
           this.props.onHistory.push('/');
        }

    }
    render() {
        return (
            <div>
                <h1>Add Photos</h1>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link">
                    </input>
                    <input type="text" placeholder="Description" name="description">
                    </input>
                    <button>Upload</button>
                </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto