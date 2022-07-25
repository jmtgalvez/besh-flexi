import { useContext } from 'react';

import UserCard from './UserCard';
import PostCard from './PostCard';

import { SearchContext } from './SearchContext';

export default function SearchResult() {

  const { searchResult } = useContext(SearchContext);

  console.log(searchResult);

  const displayUsers = [...(searchResult.users)].map( user => <UserCard key={user.user_id} user={user} /> )

  const displayPosts = [...(searchResult.posts)].map( post => <PostCard key={post.post_id} post={post} /> )

  const message =  ( searchResult.users.length == 0 && searchResult.posts.length == 0 ) ? 'No results found' : null;

  return (
    <div className='searchContainer d-flex gap-2 mt-2'>
      { message
      ? (
        <div className="card-header">
            <div className='alert alert-danger'>{message}</div>
        </div>
      ) : ''}
      { searchResult.users && searchResult.users.length > 0
      ? (
        <>
          <h1>People</h1>
          {displayUsers}
        </>
      ) : ''}
      { searchResult.posts && searchResult.posts.length > 0
      ? (
        <>
          <h1>Posts</h1>
          {displayPosts}
        </>
      ) : ''}
    </div>
  )
}
