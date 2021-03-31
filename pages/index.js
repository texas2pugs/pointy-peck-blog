import { Fragment } from 'react';

import Venue from '../components/home-page/venue.js';
import RecentPosts from '../components/home-page/recent-posts.js';

const DUMMY_POSTS = [
  {
    slug: 'new-establishment',
    title: 'New Establishment!',
    excerpt: 'The Pecking Pointe: Established 2021',
    date: '2021-03-31',
    image: 'the-pecking-pointe.jpg',
  },
  {
    slug: 'new-establishment2',
    title: 'New Establishment!',
    excerpt: 'The Pecking Pointe: Established 2021',
    date: '2021-03-31',
    image: 'the-pecking-pointe.jpg',
  },
  {
    slug: 'new-establishment3',
    title: 'New Establishment!',
    excerpt: 'The Pecking Pointe: Established 2021',
    date: '2021-03-31',
    image: 'the-pecking-pointe.jpg',
  },
];

function HomePage() {
  return (
    <Fragment>
      <Venue />
      <RecentPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
