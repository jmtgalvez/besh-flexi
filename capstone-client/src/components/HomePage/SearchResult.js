import UserCard from './UserCard';

export default function SearchResult({message, searchResultUser}) {

  const result = Object.keys(searchResultUser).map(key =>{
    return <UserCard key={searchResultUser[key].user_id} first_name={searchResultUser[key].first_name}
    last_name={searchResultUser[key].last_name} email={searchResultUser[key].email} username={searchResultUser[key].username} user={searchResultUser[key]} />
  })

  return (
    <div className='searchContainer d-flex gap-2 mt-2'>
      <div className="card w-100 h-100">
        <div className="card-header">
            <div className={message.status == 'error' ? 'alert alert-danger' : 'alert alert-success'}>{message.message}</div>
        </div>
      </div>
    {result}
    </div>
  )
}
