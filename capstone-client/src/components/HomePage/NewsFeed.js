import { useState, useEffect } from 'react';
import NewsFeedForm from './NewsFeedForm';
import PostCard from './PostCard';

import { getAllPosts } from '../api/post';

function NewsFeed() {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    getAllPosts()
    .then( response => {
      setPosts([...(response.data.posts)]);
    })
  }

  useEffect(() => {
    loadPosts();
  }, []);


  return (
    <>
      <NewsFeedForm />
      {posts && posts.map( post => <PostCard key={post.post_id} post={post} /> )}
    </>
  )
}

export default NewsFeed