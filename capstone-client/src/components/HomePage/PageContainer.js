import { useContext } from 'react';

import { PageContext } from './PageContext';

import UiHeaderMobile from '../Body/UiHeaderMobile';

import About from './About';
import Chat from '../Chat/Chat';
import FeedBack from './FeedBack';
import NewsFeed from './NewsFeed';
import SearchResult from './SearchResult';
import Settings from './Settings';
import Trending from './Trending';
import PostPage from './PostPage';

export default function PageContainer({ post, setPost }) {
    const { activePage } = useContext(PageContext);

    return (
        <div className='newsfeeds'>
            {window.innerWidth < 800 && <UiHeaderMobile />}
              {
                activePage == 'HOME' ? <NewsFeed setPost={setPost} /> :
                activePage == 'TRENDING' ? <Trending /> : 
                activePage == 'CHAT' ? <Chat /> :
                activePage == 'ABOUT' ? <About /> :
                activePage == 'SETTINGS' ? <Settings /> :
                activePage == 'HELP & SUPPORT' ? <Help />  : 
                activePage == 'GIVE FEEDBACK' ? <FeedBack /> :
                activePage == 'SEARCH' ? <SearchResult posts={posts} users={users} /> :
                activePage == 'POST' ? <PostPage post={post} setPost={setPost} /> :
                ''
              }
        </div>
    )
}