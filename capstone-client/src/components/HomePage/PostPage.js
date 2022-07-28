import { useEffect, useState, useContext } from 'react'
import PostCard from './PostCard';
import { getAllComments } from '../api/comments';
import { PageContext } from './PageContext';
import { PostContext } from './PostContext';

export default function PostPage() {
    const [comments, setComments] = useState([]);

    const { setActivePage } = useContext(PageContext);
    const { post, setPost } = useContext(PostContext);

    setActivePage('POST');

    const loadComments = () => {
        console.log('loading posts ...')
        getAllComments(post.post_id)
        .then( response => setComments(response.data.comments) )
    }

    useEffect(() => {
        loadComments();
    }, [])

    setTimeout( loadComments, 60000);

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
