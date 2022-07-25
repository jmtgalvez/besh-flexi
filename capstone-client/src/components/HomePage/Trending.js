import { useState, useEffect } from 'react';
import TrendingContent from "./TrendingContent";
import PostCard from './PostCard';
import { getTrending } from '../api/post';

export default function Trending() {

  const [posts, setPosts] = useState([]);
  
  const loadTrending = () => {
    getTrending()
    .then( result => {
      console.log(result);
      setPosts(result.data.posts);
    })
  }

  useEffect(() => {
    loadTrending();
  }, [])

  return (
    <>
      <h3 className="ms-5">Trending right now</h3>
      {
        posts && posts.map( post => <PostCard key={post.post_id} post={post} />)
      }
    </>
  );
}
