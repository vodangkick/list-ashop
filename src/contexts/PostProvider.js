import React, { Component } from 'react';
import { posts } from '../api/PostApi';

const PostContext = React.createContext();

class PostProvider extends Component {
    constructor() {
        super();
        this.state = {
            posts: posts
        }
        console.log("khoi tao");
    }
    state = {
        posts: posts
    }
    componentDidMount() {
        console.log('component Did Mount');
    }
    render() {
        console.log('rendering ....');
        return (
            <>
                <PostContext.Provider value={{ ...this.state }}>
                    {this.props.children}
                </PostContext.Provider>
            </>
        )
    }
}
const postConsumer = PostContext.Consumer;

export { PostProvider, postConsumer, PostContext }



