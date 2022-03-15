import React from "react";
import {useParams} from "react-router-dom";
import blogPosts from '../data/posts.json';


// const BlogPost = ({post}) => {
const BlogPost = ({params}) => {
// const params = useParams();
    const { id } = useParams();

    const capitalize = (myString) => {
        return myString.charAt(0).toUpperCase() + myString.slice(1);
    }

    const getPost = (postId) => {
        return blogPosts.find(
            (post) => post.id === postId
        )}

    const renderPost = (postId) => {
        const post = getPost(postId);
        const {title, content, date} = post;
        return (
            <>
                <h2>{capitalize(title)}</h2>
                <p>{content}</p>
                <hr/>
                <p>{date}</p>
            </>
        )
    }
    return (
        <div className={"content"}>
            {renderPost(id)}
        </div>

    )

}

export default BlogPost;