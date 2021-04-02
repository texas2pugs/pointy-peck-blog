import { Fragment } from 'react';

import Venue from '../components/home-page/venue.js';
import RecentPosts from '../components/home-page/recent-posts.js';
import { getRecentPosts } from '../lib/posts-util.js';

function HomePage(props) {
  return (
    <Fragment>
      <Venue />
      <RecentPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const recentPosts = getRecentPosts();

  return {
    props: {
      posts: recentPosts,
    },
    revalidate: 120,
  };
}

export default HomePage;
