import { Fragment } from 'react';
import Head from 'next/head';

import Venue from '../components/home-page/venue.js';
import RecentPosts from '../components/home-page/recent-posts.js';
import { getRecentPosts } from '../lib/posts-util.js';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>The Pecking Pointe Blog</title>
        <meta
          name="description"
          content="A blog chronicling the events of The Pecking Pointe"
        />
      </Head>
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
