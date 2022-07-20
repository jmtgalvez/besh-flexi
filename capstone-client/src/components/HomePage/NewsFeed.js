import { useState, useEffect, useContext } from 'react';
import ContentCards from './ContentCards';
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
      {posts && posts.map( post => {
        return(<div key={post.post_id}>
        <ContentCards userName={post.username} userPostText={post.content} post={post} />
        </div>)
      })}
    </>
  )
}

export default NewsFeed