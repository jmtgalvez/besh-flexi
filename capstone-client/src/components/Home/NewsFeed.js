
import PostCard from './PostCard';

function NewsFeed({ posts }) {
  return (
    <div>
      { [...posts].map( post => <PostCard post={post} /> ) }
    </div>
  )
}

export default NewsFeed;