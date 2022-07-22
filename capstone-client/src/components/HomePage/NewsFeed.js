import PostCard from './PostCard';

function NewsFeed({ posts }) {

  return (
    <>
      {posts && posts.map( post => <PostCard key={post.post_id} post={post} /> )}
    </>
  )
}

export default NewsFeed