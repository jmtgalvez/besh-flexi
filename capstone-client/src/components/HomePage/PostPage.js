import { useEffect, useState } from 'react'
import PostCard from './PostCard';
import { getAllComments } from '../api/comments';

export default function PostPage({ post, setPost }) {
    const [comments, setComments] = useState([]);

    const loadComments = () => {
        getAllComments(post.post_id)
        .then( response => setComments(response.data.comments) )
    }

    loadComments();

    return (
        <>
            <PostCard post={post} />
            { comments ? (
                <div>
                    <h1>Comments</h1>
                    {comments.map( comment => <PostCard key={comment.post_id} post={comment} setPost={setPost} /> )}
                </div>
            ) : (
                <h1>No Comments</h1>
            )}
        </>
    )
}
