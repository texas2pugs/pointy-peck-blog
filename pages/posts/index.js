import AllPosts from '../../components/posts/all-posts';

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

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
