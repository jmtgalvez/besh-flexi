import { useState } from 'react';
import * as Api from '../api/post';
import NewPostForm from './NewPostForm';
import NewsFeed from './NewsFeed';

function HomePage() {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    Api.getAllPosts()
      .then( result => {
        setPosts([...result.data.posts]);
      })
  }

  if (posts.length === 0) loadPosts()

  return (
    <>
      <main className='p-2'>
        <h1>Home</h1>
        <NewPostForm />
        <NewsFeed posts={posts} />
      </main>
    </>
  )
}

export default HomePage;