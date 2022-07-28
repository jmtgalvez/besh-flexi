import { useState, useEffect, useContext } from 'react';
import PostCard from './PostCard';
import { getTrending } from '../api/post';
import { PostContext } from './PostContext';

export default function Trending() {

  const [posts, setPosts] = useState([]);
  const { setPost } = useContext(PostContext);
  
  const loadTrending = () => {
    getTrending()
    .then( result => setPosts(result.data.posts))
  }

  useEffect(() => {
    loadTrending();
  }, [])

  return (
    <>
      <h3 className="ms-5">Trending right now</h3>
      {posts && posts.map( post => <PostCard key={post.post_id} post={post} setPost={setPost} />)}
    </>
  );
}
