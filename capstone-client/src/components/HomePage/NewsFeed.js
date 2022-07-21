import { useState, useEffect, useContext } from 'react';
import NewsFeedsForm from './NewsFeedForm';
import PostCard from './PostCard';
import * as Api from '../api/post';
import { UserContext } from '../UserContext';

function NewsFeed() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Api.getAllPosts(user.access_token)
    .then( response => {
      setPosts([...(response.data.posts)]);
    })
  }, []);

  return (
    <>
      <NewsFeedsForm />
      {posts && posts.map( post => {
        return(<div key={post.post_id}>
        <PostCard userName={post.username} userPostText={post.content} post={post} />
        </div>)
      })}
    </>
  )
}

export default NewsFeed