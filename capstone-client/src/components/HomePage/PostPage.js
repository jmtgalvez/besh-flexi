import { useEffect, useState, useContext } from 'react'
import PostCard from './PostCard';
import { getAllComments } from '../api/comments';
import { PageContext } from './PageContext';

export default function PostPage({ post }) {
    const [comments, setComments] = useState([]);

    const { setActivePage } = useContext(PageContext);

    setActivePage('POST');

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
