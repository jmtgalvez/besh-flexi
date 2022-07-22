import UserCard from './UserCard';
import PostCard from './PostCard';
import NewsFeed from './NewsFeed';
import { useResolvedPath } from 'react-router';

export default function SearchResult({ posts, users }) {

  const displayUsers = [...users].map( user => <UserCard key={user.user_id} user={user} /> )

  const displayPosts = [...posts].map( post => <PostCard key={post.post_id} post={post} /> )

  const message =  ( users.length == 0 && posts.length == 0 ) ? 'No results found' : null;

  return (
    <div className='searchContainer d-flex gap-2 mt-2'>
      { message
      ? (
        <div className="card-header">
            <div className='alert alert-danger'>{message}</div>
        </div>
      ) : ''}
      { users && users.length > 0
      ? (
        <>
          <h1>People</h1>
          {displayUsers}
        </>
      ) : ''}
      { posts && posts.length > 0
      ? (
        <>
          <h1>Posts</h1>
          {displayPosts}
        </>
      ) : ''}
    </div>
  )
}
