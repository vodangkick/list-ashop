import React, { useContext } from 'react';
import PagingPost from '../common/PagingPost';
import PostItemList from './PostItemList';
import { PostContext } from '../../contexts/PostProvider';


export default function ListPost() {
    const value = useContext(PostContext);
    const { posts } = value;
    return (
        <div className="col-lg-8">
            <div className="blog_left_sidebar">
                {posts.map((item, index) => <PostItemList key={item.id} item={item} value={value} />)}
                <PagingPost />
            </div>
        </div>
    )
}
