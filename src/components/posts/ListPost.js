import React from 'react';
import PagingPost from '../common/PagingPost';
import PostItemList from './PostItemList';

export default function ListPost() {
    return (
        <div className="col-lg-8">
            <div className="blog_left_sidebar">
                <PostItemList />
                <PagingPost />
            </div>
        </div>
    )
}
