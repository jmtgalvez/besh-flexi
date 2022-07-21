import { useState, useEffect, useContext } from 'react';
import NewsFeedsForm from './NewsFeedForm';
import PostCard from './PostCard';
import * as Api from '../api/post';
import { UserContext } from '../UserContext';

function NewsFeed() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    Api.getAllPosts(user.access_token)
    .then( response => {
      setPosts([...(response.data.posts)]);
    })
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      <NewsFeedsForm loadPosts={loadPosts} />
      {posts && posts.map( post => {
        return(<div key={post.post_id}>
        <PostCard userName={post.username} userPostText={post.content} post={post} />
        </div>)
      })}
    </>
  )
}

export default NewsFeed