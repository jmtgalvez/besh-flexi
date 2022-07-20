import { useState, useContext } from 'react';
import * as Api from '../api/post';
import NewPostForm from './NewPostForm';
import NewsFeed from './NewsFeed';
import { UserContext } from '../UserContext';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const loadPosts = () => {
    Api.getAllPosts()
      .then( result => {
        setPosts([...result.data.posts]);
      })
  }

  if (user == null) window.location.href = '/login';

  if (posts.length === 0) loadPosts()

  return (
    <>

      <main className='p-2'>
        <h1>Home</h1>
        <NewPostForm loadPosts={loadPosts}/>
        <NewsFeed posts={posts} />
      </main>
    </>
  )
}

export default HomePage;