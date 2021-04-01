import PostHeader from './post-header';

import classes from './post-content.module.css';

const DUMMY_POSTS = [
  {
    slug: 'new-establishment',
    title: 'New Establishment!',
    content: '# This is a first post',
    date: '2021-03-31',
    image: 'the-pecking-pointe.jpg',
  },
];

function PostContent() {
  console.log('Inside PostContent()');
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      {DUMMY_POSTS.content}
    </article>
  );
}

export default PostContent;
