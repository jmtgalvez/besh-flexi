import { useState, useContext, useEffect } from 'react';
import * as Api from '../api/post';
import NewPostForm from './NewPostForm';
import NewsFeed from './NewsFeed';
import { UserContext } from '../UserContext';

function HomePage() {
  const { user } = useContext(UserContext);
  if (user == null) window.location.href = '/login';
  
  const [posts, setPosts] = useState([]);

  useEffect( async () => {
    const result = await Api.getAllPosts();
    setPosts([...result.data.posts]);
  }, []);



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